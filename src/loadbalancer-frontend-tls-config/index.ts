/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend_tls_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerFrontendTlsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reference to certificate bundle ID.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend_tls_config#certificate_bundle LoadbalancerFrontendTlsConfig#certificate_bundle}
  */
  readonly certificateBundle: string;
  /**
  * ID of the load balancer frontend to which the TLS config is connected.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend_tls_config#frontend LoadbalancerFrontendTlsConfig#frontend}
  */
  readonly frontend: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend_tls_config#id LoadbalancerFrontendTlsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the TLS config must be unique within service frontend.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend_tls_config#name LoadbalancerFrontendTlsConfig#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend_tls_config upcloud_loadbalancer_frontend_tls_config}
*/
export class LoadbalancerFrontendTlsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_frontend_tls_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend_tls_config upcloud_loadbalancer_frontend_tls_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerFrontendTlsConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerFrontendTlsConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer_frontend_tls_config',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.11.0',
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
    this._certificateBundle = config.certificateBundle;
    this._frontend = config.frontend;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_bundle - computed: false, optional: false, required: true
  private _certificateBundle?: string; 
  public get certificateBundle() {
    return this.getStringAttribute('certificate_bundle');
  }
  public set certificateBundle(value: string) {
    this._certificateBundle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBundleInput() {
    return this._certificateBundle;
  }

  // frontend - computed: false, optional: false, required: true
  private _frontend?: string; 
  public get frontend() {
    return this.getStringAttribute('frontend');
  }
  public set frontend(value: string) {
    this._frontend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendInput() {
    return this._frontend;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_bundle: cdktf.stringToTerraform(this._certificateBundle),
      frontend: cdktf.stringToTerraform(this._frontend),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
