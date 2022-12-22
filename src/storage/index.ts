// https://www.terraform.io/docs/providers/upcloud/r/storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#delete_autoresize_backup Storage#delete_autoresize_backup}
  */
  readonly deleteAutoresizeBackup?: boolean | cdktf.IResolvable;
  /**
  * If set to true, provider will attempt to resize partition and filesystem when the size of the storage changes.
				Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used
				to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless delete_autoresize_backup option is set to true).
				Taking and keeping backups incure costs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#filesystem_autoresize Storage#filesystem_autoresize}
  */
  readonly filesystemAutoresize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#id Storage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The size of the storage in gigabytes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#size Storage#size}
  */
  readonly size: number;
  /**
  * The storage tier to use
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#tier Storage#tier}
  */
  readonly tier?: string;
  /**
  * A short, informative description
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#title Storage#title}
  */
  readonly title: string;
  /**
  * The zone in which the storage will be created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#zone Storage#zone}
  */
  readonly zone: string;
  /**
  * backup_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#backup_rule Storage#backup_rule}
  */
  readonly backupRule?: StorageBackupRule;
  /**
  * clone block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#clone Storage#clone}
  */
  readonly clone?: StorageClone;
  /**
  * import block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#import Storage#import}
  */
  readonly import?: StorageImport;
}
export interface StorageBackupRule {
  /**
  * The weekday when the backup is created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#interval Storage#interval}
  */
  readonly interval: string;
  /**
  * The number of days before a backup is automatically deleted
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#retention Storage#retention}
  */
  readonly retention: number;
  /**
  * The time of day when the backup is created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#time Storage#time}
  */
  readonly time: string;
}

export function storageBackupRuleToTerraform(struct?: StorageBackupRuleOutputReference | StorageBackupRule): any {
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

export class StorageBackupRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBackupRule | undefined {
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

  public set internalValue(value: StorageBackupRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._retention = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface StorageClone {
  /**
  * The unique identifier of the storage/template to clone
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#id Storage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function storageCloneToTerraform(struct?: StorageCloneOutputReference | StorageClone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class StorageCloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageClone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageClone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface StorageImport {
  /**
  * The mode of the import task. One of `http_import` or `direct_upload`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#source Storage#source}
  */
  readonly source: string;
  /**
  * For `direct_upload`; an optional hash of the file to upload.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#source_hash Storage#source_hash}
  */
  readonly sourceHash?: string;
  /**
  * The location of the file to import. For `http_import` an accessible URL for `direct_upload` a local file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/storage#source_location Storage#source_location}
  */
  readonly sourceLocation: string;
}

export function storageImportToTerraform(struct?: StorageImportOutputReference | StorageImport): any {
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

export class StorageImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageImport | undefined {
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

  public set internalValue(value: StorageImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source = undefined;
      this._sourceHash = undefined;
      this._sourceLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/storage upcloud_storage}
*/
export class Storage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_storage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/storage upcloud_storage} Resource
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
        providerVersion: '2.8.0',
        providerVersionConstraint: '~> 2.4'
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
    this._filesystemAutoresize = config.filesystemAutoresize;
    this._id = config.id;
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

  // delete_autoresize_backup - computed: false, optional: true, required: false
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

  // filesystem_autoresize - computed: false, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _backupRule = new StorageBackupRuleOutputReference(this, "backup_rule");
  public get backupRule() {
    return this._backupRule;
  }
  public putBackupRule(value: StorageBackupRule) {
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
  private _clone = new StorageCloneOutputReference(this, "clone");
  public get clone() {
    return this._clone;
  }
  public putClone(value: StorageClone) {
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
  private _import = new StorageImportOutputReference(this, "import");
  public get import() {
    return this._import;
  }
  public putImport(value: StorageImport) {
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
      filesystem_autoresize: cdktf.booleanToTerraform(this._filesystemAutoresize),
      id: cdktf.stringToTerraform(this._id),
      size: cdktf.numberToTerraform(this._size),
      tier: cdktf.stringToTerraform(this._tier),
      title: cdktf.stringToTerraform(this._title),
      zone: cdktf.stringToTerraform(this._zone),
      backup_rule: storageBackupRuleToTerraform(this._backupRule.internalValue),
      clone: storageCloneToTerraform(this._clone.internalValue),
      import: storageImportToTerraform(this._import.internalValue),
    };
  }
}
