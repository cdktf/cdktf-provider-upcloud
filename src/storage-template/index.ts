// https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/storage_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * User defined key-value pairs to classify the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/storage_template#labels StorageTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The source storage that is used as a base for this storage template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/storage_template#source_storage StorageTemplate#source_storage}
  */
  readonly sourceStorage: string;
  /**
  * The title of the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/storage_template#title StorageTemplate#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/storage_template upcloud_storage_template}
*/
export class StorageTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_storage_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageTemplate to import
  * @param importFromId The id of the existing StorageTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/storage_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_storage_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/storage_template upcloud_storage_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: StorageTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_storage_template',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.10.0',
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
    this._labels = config.labels;
    this._sourceStorage = config.sourceStorage;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encrypt - computed: true, optional: false, required: false
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
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

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // source_storage - computed: false, optional: false, required: true
  private _sourceStorage?: string; 
  public get sourceStorage() {
    return this.getStringAttribute('source_storage');
  }
  public set sourceStorage(value: string) {
    this._sourceStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStorageInput() {
    return this._sourceStorage;
  }

  // system_labels - computed: true, optional: false, required: false
  private _systemLabels = new cdktf.StringMap(this, "system_labels");
  public get systemLabels() {
    return this._systemLabels;
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
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

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      source_storage: cdktf.stringToTerraform(this._sourceStorage),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      source_storage: {
        value: cdktf.stringToHclTerraform(this._sourceStorage),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
