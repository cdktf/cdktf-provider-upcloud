/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/loadbalancer_manual_certificate_bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerManualCertificateBundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate as base64 encoded string. Must be in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/loadbalancer_manual_certificate_bundle#certificate LoadbalancerManualCertificateBundle#certificate}
  */
  readonly certificate: string;
  /**
  * Intermediate certificates as base64 encoded string. Must be in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/loadbalancer_manual_certificate_bundle#intermediates LoadbalancerManualCertificateBundle#intermediates}
  */
  readonly intermediates?: string;
  /**
  * The name of the certificate bundle. Must be unique within customer account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/loadbalancer_manual_certificate_bundle#name LoadbalancerManualCertificateBundle#name}
  */
  readonly name: string;
  /**
  * Private key as base64 encoded string. Must be in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/loadbalancer_manual_certificate_bundle#private_key LoadbalancerManualCertificateBundle#private_key}
  */
  readonly privateKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/loadbalancer_manual_certificate_bundle upcloud_loadbalancer_manual_certificate_bundle}
*/
export class LoadbalancerManualCertificateBundle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_manual_certificate_bundle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadbalancerManualCertificateBundle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadbalancerManualCertificateBundle to import
  * @param importFromId The id of the existing LoadbalancerManualCertificateBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/loadbalancer_manual_certificate_bundle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadbalancerManualCertificateBundle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_loadbalancer_manual_certificate_bundle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/loadbalancer_manual_certificate_bundle upcloud_loadbalancer_manual_certificate_bundle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerManualCertificateBundleConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerManualCertificateBundleConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer_manual_certificate_bundle',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.22.0',
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
    this._certificate = config.certificate;
    this._intermediates = config.intermediates;
    this._name = config.name;
    this._privateKey = config.privateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intermediates - computed: true, optional: true, required: false
  private _intermediates?: string; 
  public get intermediates() {
    return this.getStringAttribute('intermediates');
  }
  public set intermediates(value: string) {
    this._intermediates = value;
  }
  public resetIntermediates() {
    this._intermediates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediatesInput() {
    return this._intermediates;
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

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // operational_state - computed: true, optional: false, required: false
  public get operationalState() {
    return this.getStringAttribute('operational_state');
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      intermediates: cdktf.stringToTerraform(this._intermediates),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intermediates: {
        value: cdktf.stringToHclTerraform(this._intermediates),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
