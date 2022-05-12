// https://www.terraform.io/docs/providers/upcloud/r/object_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access key used to identify user.
				Can be set to an empty string, which will tell the provider to get the access key from environment variable.
				The environment variable should be "UPCLOUD_OBJECT_STORAGE_ACCESS_KEY_{name}".
				{name} is the name given to object storage instance (so not the resource label), it should be all uppercased
				and all dashes (-) should be replaced with underscores (_). For example, object storage named "my-files" would
				use environment variable named "UPCLOUD_OBJECT_STORAGE_ACCESS_KEY_MY_FILES".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/object_storage#access_key ObjectStorage#access_key}
  */
  readonly accessKey: string;
  /**
  * The description of the object storage instance to be created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/object_storage#description ObjectStorage#description}
  */
  readonly description?: string;
  /**
  * The name of the object storage instance to be created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/object_storage#name ObjectStorage#name}
  */
  readonly name: string;
  /**
  * The secret key used to authenticate user.
				Can be set to an empty string, which will tell the provider to get the secret key from environment variable.
				The environment variable should be "UPCLOUD_OBJECT_STORAGE_SECRET_KEY_{name}".
				{name} is the name given to object storage instance (so not the resource label), it should be all uppercased
				and all dashes (-) should be replaced with underscores (_). For example, object storage named "my-files" would
				use environment variable named "UPCLOUD_OBJECT_STORAGE_SECRET_KEY_MY_FILES".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/object_storage#secret_key ObjectStorage#secret_key}
  */
  readonly secretKey: string;
  /**
  * The size of the object storage instance in gigabytes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/object_storage#size ObjectStorage#size}
  */
  readonly size: number;
  /**
  * The zone in which the object storage instance will be created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/object_storage#zone ObjectStorage#zone}
  */
  readonly zone: string;
  /**
  * bucket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/object_storage#bucket ObjectStorage#bucket}
  */
  readonly bucket?: ObjectStorageBucket[] | cdktf.IResolvable;
}
export interface ObjectStorageBucket {
  /**
  * The name of the bucket
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/object_storage#name ObjectStorage#name}
  */
  readonly name: string;
}

export function objectStorageBucketToTerraform(struct?: ObjectStorageBucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/object_storage upcloud_object_storage}
*/
export class ObjectStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_object_storage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/object_storage upcloud_object_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStorageConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_object_storage',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.4.2',
        providerVersionConstraint: '~> 2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessKey = config.accessKey;
    this._description = config.description;
    this._name = config.name;
    this._secretKey = config.secretKey;
    this._size = config.size;
    this._zone = config.zone;
    this._bucket = config.bucket;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // used_space - computed: true, optional: false, required: false
  public get usedSpace() {
    return this.getNumberAttribute('used_space');
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

  // bucket - computed: false, optional: true, required: false
  private _bucket?: ObjectStorageBucket[] | cdktf.IResolvable; 
  public get bucket() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('bucket')));
  }
  public set bucket(value: ObjectStorageBucket[] | cdktf.IResolvable) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      size: cdktf.numberToTerraform(this._size),
      zone: cdktf.stringToTerraform(this._zone),
      bucket: cdktf.listMapper(objectStorageBucketToTerraform)(this._bucket),
    };
  }
}
