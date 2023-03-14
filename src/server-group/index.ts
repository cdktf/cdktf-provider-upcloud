// https://www.terraform.io/docs/providers/upcloud/r/server_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Is group an anti-affinity group. Setting this to true will result in all servers in the group being placed on separate compute hosts.
				NOTE: this is an experimental feature. The anti-affinity policy is "best-effort" and it is not
				guaranteed that all the servers will end up on a separate compute hosts. You can verify if the
				anti-affinity policies are met by requesting a server group details from API. For more information
				please see UpCloud API documentation on server groups
				Plese also note that anti-affinity policies are only applied on server start. This means that if anti-affinity
				policies in server group are not met, you need to manually restart the servers in said group,
				for example via API, UpCloud Control Panel or upctl (UpCloud CLI)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/server_group#anti_affinity ServerGroup#anti_affinity}
  */
  readonly antiAffinity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/server_group#id ServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels for your server group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/server_group#labels ServerGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * UUIDs of the servers that are members of this group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/server_group#members ServerGroup#members}
  */
  readonly members?: string[];
  /**
  * Title of your server group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/server_group#title ServerGroup#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/server_group upcloud_server_group}
*/
export class ServerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_server_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/server_group upcloud_server_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ServerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_server_group',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.9.0',
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
    this._antiAffinity = config.antiAffinity;
    this._id = config.id;
    this._labels = config.labels;
    this._members = config.members;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_affinity - computed: false, optional: true, required: false
  private _antiAffinity?: boolean | cdktf.IResolvable; 
  public get antiAffinity() {
    return this.getBooleanAttribute('anti_affinity');
  }
  public set antiAffinity(value: boolean | cdktf.IResolvable) {
    this._antiAffinity = value;
  }
  public resetAntiAffinity() {
    this._antiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityInput() {
    return this._antiAffinity;
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

  // labels - computed: false, optional: true, required: false
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

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_affinity: cdktf.booleanToTerraform(this._antiAffinity),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
