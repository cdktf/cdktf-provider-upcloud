// https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerManualCertificateBundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate within base64 string must be in PEM format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle#certificate LoadbalancerManualCertificateBundle#certificate}
  */
  readonly certificate: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle#id LoadbalancerManualCertificateBundle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Intermediate certificates within base64 string must be in PEM format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle#intermediates LoadbalancerManualCertificateBundle#intermediates}
  */
  readonly intermediates?: string;
  /**
  * The name of the bundle must be unique within customer account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle#name LoadbalancerManualCertificateBundle#name}
  */
  readonly name: string;
  /**
  * Private key within base64 string must be in PEM format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle#private_key LoadbalancerManualCertificateBundle#private_key}
  */
  readonly privateKey: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle upcloud_loadbalancer_manual_certificate_bundle}
*/
export class LoadbalancerManualCertificateBundle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_manual_certificate_bundle";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle upcloud_loadbalancer_manual_certificate_bundle} Resource
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
        providerVersion: '2.5.0',
        providerVersionConstraint: '~> 2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificate = config.certificate;
    this._id = config.id;
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

  // intermediates - computed: false, optional: true, required: false
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
      id: cdktf.stringToTerraform(this._id),
      intermediates: cdktf.stringToTerraform(this._intermediates),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
    };
  }
}
