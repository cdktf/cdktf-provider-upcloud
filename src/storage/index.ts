/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#delete_autoresize_backup Storage#delete_autoresize_backup}
  */
  readonly deleteAutoresizeBackup?: boolean | cdktf.IResolvable;
  /**
  * Sets if the storage is encrypted at rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#encrypt Storage#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * If set to true, provider will attempt to resize partition and filesystem when the size of the storage changes. Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless `delete_autoresize_backup` option is set to true).
  * 				Taking and keeping backups incure costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#filesystem_autoresize Storage#filesystem_autoresize}
  */
  readonly filesystemAutoresize?: boolean | cdktf.IResolvable;
  /**
  * User defined key-value pairs to classify the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#labels Storage#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The size of the storage in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#size Storage#size}
  */
  readonly size: number;
  /**
  * The tier of the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#tier Storage#tier}
  */
  readonly tier?: string;
  /**
  * The title of the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#title Storage#title}
  */
  readonly title: string;
  /**
  * The zone the storage is in, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#zone Storage#zone}
  */
  readonly zone: string;
  /**
  * backup_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#backup_rule Storage#backup_rule}
  */
  readonly backupRule?: StorageBackupRule[] | cdktf.IResolvable;
  /**
  * clone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#clone Storage#clone}
  */
  readonly clone?: StorageClone[] | cdktf.IResolvable;
  /**
  * import block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#import Storage#import}
  */
  readonly import?: StorageImport[] | cdktf.IResolvable;
}
export interface StorageBackupRule {
  /**
  * The weekday when the backup is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#interval Storage#interval}
  */
  readonly interval: string;
  /**
  * The number of days before a backup is automatically deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#retention Storage#retention}
  */
  readonly retention: number;
  /**
  * The time of day when the backup is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#time Storage#time}
  */
  readonly time: string;
}

export function storageBackupRuleToTerraform(struct?: StorageBackupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    retention: cdktf.numberToTerraform(struct!.retention),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function storageBackupRuleToHclTerraform(struct?: StorageBackupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.numberToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageBackupRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StorageBackupRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBackupRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._retention = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._retention = value.retention;
      this._time = value.time;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // retention - computed: false, optional: false, required: true
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class StorageBackupRuleList extends cdktf.ComplexList {
  public internalValue? : StorageBackupRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StorageBackupRuleOutputReference {
    return new StorageBackupRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageClone {
  /**
  * The unique identifier of the storage/template to clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#id Storage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function storageCloneToTerraform(struct?: StorageClone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function storageCloneToHclTerraform(struct?: StorageClone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageCloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StorageClone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageClone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class StorageCloneList extends cdktf.ComplexList {
  public internalValue? : StorageClone[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StorageCloneOutputReference {
    return new StorageCloneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageImport {
  /**
  * The mode of the import task. One of `http_import` or `direct_upload`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#source Storage#source}
  */
  readonly source: string;
  /**
  * SHA256 hash of the source content. This hash is used to verify the integrity of the imported data by comparing it to `sha256sum` after the import has completed. Possible filename is automatically removed from the hash before comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#source_hash Storage#source_hash}
  */
  readonly sourceHash?: string;
  /**
  * The location of the file to import. For `http_import` an accessible URL. For `direct_upload` a local file. When direct uploading a compressed image, `Content-Type` header of the PUT request is set automatically based on the file extension (`.gz` or `.xz`, case-insensitive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#source_location Storage#source_location}
  */
  readonly sourceLocation: string;
}

export function storageImportToTerraform(struct?: StorageImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    source_hash: cdktf.stringToTerraform(struct!.sourceHash),
    source_location: cdktf.stringToTerraform(struct!.sourceLocation),
  }
}


export function storageImportToHclTerraform(struct?: StorageImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_hash: {
      value: cdktf.stringToHclTerraform(struct!.sourceHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StorageImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHash = this._sourceHash;
    }
    if (this._sourceLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLocation = this._sourceLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._sourceHash = undefined;
      this._sourceLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._sourceHash = value.sourceHash;
      this._sourceLocation = value.sourceLocation;
    }
  }

  // sha256sum - computed: true, optional: false, required: false
  public get sha256Sum() {
    return this.getStringAttribute('sha256sum');
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_hash - computed: false, optional: true, required: false
  private _sourceHash?: string; 
  public get sourceHash() {
    return this.getStringAttribute('source_hash');
  }
  public set sourceHash(value: string) {
    this._sourceHash = value;
  }
  public resetSourceHash() {
    this._sourceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHashInput() {
    return this._sourceHash;
  }

  // source_location - computed: false, optional: false, required: true
  private _sourceLocation?: string; 
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }
  public set sourceLocation(value: string) {
    this._sourceLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationInput() {
    return this._sourceLocation;
  }

  // written_bytes - computed: true, optional: false, required: false
  public get writtenBytes() {
    return this.getNumberAttribute('written_bytes');
  }
}

export class StorageImportList extends cdktf.ComplexList {
  public internalValue? : StorageImport[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StorageImportOutputReference {
    return new StorageImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage upcloud_storage}
*/
export class Storage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Storage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Storage to import
  * @param importFromId The id of the existing Storage that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Storage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.5/docs/resources/storage upcloud_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageConfig
  */
  public constructor(scope: Construct, id: string, config: StorageConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_storage',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.20.5',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteAutoresizeBackup = config.deleteAutoresizeBackup;
    this._encrypt = config.encrypt;
    this._filesystemAutoresize = config.filesystemAutoresize;
    this._labels = config.labels;
    this._size = config.size;
    this._tier = config.tier;
    this._title = config.title;
    this._zone = config.zone;
    this._backupRule.internalValue = config.backupRule;
    this._clone.internalValue = config.clone;
    this._import.internalValue = config.import;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_autoresize_backup - computed: true, optional: true, required: false
  private _deleteAutoresizeBackup?: boolean | cdktf.IResolvable; 
  public get deleteAutoresizeBackup() {
    return this.getBooleanAttribute('delete_autoresize_backup');
  }
  public set deleteAutoresizeBackup(value: boolean | cdktf.IResolvable) {
    this._deleteAutoresizeBackup = value;
  }
  public resetDeleteAutoresizeBackup() {
    this._deleteAutoresizeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAutoresizeBackupInput() {
    return this._deleteAutoresizeBackup;
  }

  // encrypt - computed: true, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // filesystem_autoresize - computed: true, optional: true, required: false
  private _filesystemAutoresize?: boolean | cdktf.IResolvable; 
  public get filesystemAutoresize() {
    return this.getBooleanAttribute('filesystem_autoresize');
  }
  public set filesystemAutoresize(value: boolean | cdktf.IResolvable) {
    this._filesystemAutoresize = value;
  }
  public resetFilesystemAutoresize() {
    this._filesystemAutoresize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemAutoresizeInput() {
    return this._filesystemAutoresize;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // system_labels - computed: true, optional: false, required: false
  private _systemLabels = new cdktf.StringMap(this, "system_labels");
  public get systemLabels() {
    return this._systemLabels;
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // backup_rule - computed: false, optional: true, required: false
  private _backupRule = new StorageBackupRuleList(this, "backup_rule", false);
  public get backupRule() {
    return this._backupRule;
  }
  public putBackupRule(value: StorageBackupRule[] | cdktf.IResolvable) {
    this._backupRule.internalValue = value;
  }
  public resetBackupRule() {
    this._backupRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRuleInput() {
    return this._backupRule.internalValue;
  }

  // clone - computed: false, optional: true, required: false
  private _clone = new StorageCloneList(this, "clone", true);
  public get clone() {
    return this._clone;
  }
  public putClone(value: StorageClone[] | cdktf.IResolvable) {
    this._clone.internalValue = value;
  }
  public resetClone() {
    this._clone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone.internalValue;
  }

  // import - computed: false, optional: true, required: false
  private _import = new StorageImportList(this, "import", true);
  public get import() {
    return this._import;
  }
  public putImport(value: StorageImport[] | cdktf.IResolvable) {
    this._import.internalValue = value;
  }
  public resetImport() {
    this._import.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_autoresize_backup: cdktf.booleanToTerraform(this._deleteAutoresizeBackup),
      encrypt: cdktf.booleanToTerraform(this._encrypt),
      filesystem_autoresize: cdktf.booleanToTerraform(this._filesystemAutoresize),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      size: cdktf.numberToTerraform(this._size),
      tier: cdktf.stringToTerraform(this._tier),
      title: cdktf.stringToTerraform(this._title),
      zone: cdktf.stringToTerraform(this._zone),
      backup_rule: cdktf.listMapper(storageBackupRuleToTerraform, true)(this._backupRule.internalValue),
      clone: cdktf.listMapper(storageCloneToTerraform, true)(this._clone.internalValue),
      import: cdktf.listMapper(storageImportToTerraform, true)(this._import.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_autoresize_backup: {
        value: cdktf.booleanToHclTerraform(this._deleteAutoresizeBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt: {
        value: cdktf.booleanToHclTerraform(this._encrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filesystem_autoresize: {
        value: cdktf.booleanToHclTerraform(this._filesystemAutoresize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_rule: {
        value: cdktf.listMapperHcl(storageBackupRuleToHclTerraform, true)(this._backupRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageBackupRuleList",
      },
      clone: {
        value: cdktf.listMapperHcl(storageCloneToHclTerraform, true)(this._clone.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StorageCloneList",
      },
      import: {
        value: cdktf.listMapperHcl(storageImportToHclTerraform, true)(this._import.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StorageImportList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
