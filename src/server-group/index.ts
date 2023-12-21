/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/server_group
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/server_group#anti_affinity_policy ServerGroup#anti_affinity_policy}
  */
  readonly antiAffinityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/server_group#id ServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key-value pairs to classify the server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/server_group#labels ServerGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * UUIDs of the servers that are members of this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/server_group#members ServerGroup#members}
  */
  readonly members?: string[];
  /**
  * Title of your server group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/server_group#title ServerGroup#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/server_group upcloud_server_group}
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
  * @param importFromId The id of the existing ServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/server_group upcloud_server_group} Resource
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
        providerVersion: '3.3.0',
        providerVersionConstraint: '~> 3.0'
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
    this._id = config.id;
    this._labels = config.labels;
    this._members = config.members;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_affinity_policy - computed: false, optional: true, required: false
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
      anti_affinity_policy: cdktf.stringToTerraform(this._antiAffinityPolicy),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
