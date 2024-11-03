// https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access key used to identify user.
  * 				Can be set to an empty string, which will tell the provider to get the access key from environment variable.
  * 				The environment variable should be "UPCLOUD_OBJECT_STORAGE_ACCESS_KEY_{name}".
  * 				{name} is the name given to object storage instance (so not the resource label), it should be all uppercased
  * 				and all dashes (-) should be replaced with underscores (_). For example, object storage named "my-files" would
  * 				use environment variable named "UPCLOUD_OBJECT_STORAGE_ACCESS_KEY_MY_FILES".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage#access_key ObjectStorage#access_key}
  */
  readonly accessKey: string;
  /**
  * The description of the object storage instance to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage#description ObjectStorage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage#id ObjectStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the object storage instance to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage#name ObjectStorage#name}
  */
  readonly name: string;
  /**
  * The secret key used to authenticate user.
  * 				Can be set to an empty string, which will tell the provider to get the secret key from environment variable.
  * 				The environment variable should be "UPCLOUD_OBJECT_STORAGE_SECRET_KEY_{name}".
  * 				{name} is the name given to object storage instance (so not the resource label), it should be all uppercased
  * 				and all dashes (-) should be replaced with underscores (_). For example, object storage named "my-files" would
  * 				use environment variable named "UPCLOUD_OBJECT_STORAGE_SECRET_KEY_MY_FILES".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage#secret_key ObjectStorage#secret_key}
  */
  readonly secretKey: string;
  /**
  * The size of the object storage instance in gigabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage#size ObjectStorage#size}
  */
  readonly size: number;
  /**
  * The zone in which the object storage instance will be created, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage#zone ObjectStorage#zone}
  */
  readonly zone: string;
  /**
  * bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage#bucket ObjectStorage#bucket}
  */
  readonly bucket?: ObjectStorageBucket[] | cdktf.IResolvable;
}
export interface ObjectStorageBucket {
  /**
  * The name of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage#name ObjectStorage#name}
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


export function objectStorageBucketToHclTerraform(struct?: ObjectStorageBucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageBucketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectStorageBucket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class ObjectStorageBucketList extends cdktf.ComplexList {
  public internalValue? : ObjectStorageBucket[] | cdktf.IResolvable

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
  public get(index: number): ObjectStorageBucketOutputReference {
    return new ObjectStorageBucketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage upcloud_object_storage}
*/
export class ObjectStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_object_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStorage to import
  * @param importFromId The id of the existing ObjectStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_object_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/object_storage upcloud_object_storage} Resource
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
        providerVersion: '5.14.0',
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
    this._accessKey = config.accessKey;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._secretKey = config.secretKey;
    this._size = config.size;
    this._zone = config.zone;
    this._bucket.internalValue = config.bucket;
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
  private _bucket = new ObjectStorageBucketList(this, "bucket", true);
  public get bucket() {
    return this._bucket;
  }
  public putBucket(value: ObjectStorageBucket[] | cdktf.IResolvable) {
    this._bucket.internalValue = value;
  }
  public resetBucket() {
    this._bucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      size: cdktf.numberToTerraform(this._size),
      zone: cdktf.stringToTerraform(this._zone),
      bucket: cdktf.listMapper(objectStorageBucketToTerraform, true)(this._bucket.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.listMapperHcl(objectStorageBucketToHclTerraform, true)(this._bucket.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ObjectStorageBucketList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
