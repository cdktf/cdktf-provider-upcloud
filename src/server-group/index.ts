// https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/server_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines if a server group is an anti-affinity group. Setting this to `strict` or `yes` will
  * 	result in all servers in the group being placed on separate compute hosts. The value can be `strict`, `yes`, or `no`.
  * 
  * 	* `strict` policy doesn't allow servers in the same server group to be on the same host
  * 	* `yes` refers to best-effort policy and tries to put servers on different hosts, but this is not guaranteed
  * 	* `no` refers to having no policy and thus no effect on server host affinity
  * 
  * 	To verify if the anti-affinity policies are met by requesting a server group details from API. For more information
  * 	please see UpCloud API documentation on server groups.
  * 
  * 	Plese also note that anti-affinity policies are only applied on server start. This means that if anti-affinity
  * 	policies in server group are not met, you need to manually restart the servers in said group,
  * 	for example via API, UpCloud Control Panel or upctl (UpCloud CLI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/server_group#anti_affinity_policy ServerGroup#anti_affinity_policy}
  */
  readonly antiAffinityPolicy?: string;
  /**
  * User defined key-value pairs to classify the server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/server_group#labels ServerGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * UUIDs of the servers that are members of this group. Servers can also be attached to the server group via `server_group` property of `upcloud_server`. See also `track_members` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/server_group#members ServerGroup#members}
  */
  readonly members?: string[];
  /**
  * Title of your server group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/server_group#title ServerGroup#title}
  */
  readonly title: string;
  /**
  * Controls if members of the server group are being tracked in this resource. Set to `false` when using `server_group` property of `upcloud_server` to attach servers to the server group to avoid delayed state updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/server_group#track_members ServerGroup#track_members}
  */
  readonly trackMembers?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/server_group upcloud_server_group}
*/
export class ServerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_server_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerGroup to import
  * @param importFromId The id of the existing ServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/server_group upcloud_server_group} Resource
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
        providerVersion: '5.17.0',
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
    this._antiAffinityPolicy = config.antiAffinityPolicy;
    this._labels = config.labels;
    this._members = config.members;
    this._title = config.title;
    this._trackMembers = config.trackMembers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_affinity_policy - computed: true, optional: true, required: false
  private _antiAffinityPolicy?: string; 
  public get antiAffinityPolicy() {
    return this.getStringAttribute('anti_affinity_policy');
  }
  public set antiAffinityPolicy(value: string) {
    this._antiAffinityPolicy = value;
  }
  public resetAntiAffinityPolicy() {
    this._antiAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityPolicyInput() {
    return this._antiAffinityPolicy;
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

  // track_members - computed: true, optional: true, required: false
  private _trackMembers?: boolean | cdktf.IResolvable; 
  public get trackMembers() {
    return this.getBooleanAttribute('track_members');
  }
  public set trackMembers(value: boolean | cdktf.IResolvable) {
    this._trackMembers = value;
  }
  public resetTrackMembers() {
    this._trackMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackMembersInput() {
    return this._trackMembers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_affinity_policy: cdktf.stringToTerraform(this._antiAffinityPolicy),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      title: cdktf.stringToTerraform(this._title),
      track_members: cdktf.booleanToTerraform(this._trackMembers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_affinity_policy: {
        value: cdktf.stringToHclTerraform(this._antiAffinityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_members: {
        value: cdktf.booleanToHclTerraform(this._trackMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
