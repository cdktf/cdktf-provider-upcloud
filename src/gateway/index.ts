// https://www.terraform.io/docs/providers/upcloud/r/gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * The service configured status indicates the service's current intended status. Managed by the customer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/gateway#configured_status Gateway#configured_status}
  */
  readonly configuredStatus?: string;
  /**
  * Features enabled for the gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/gateway#features Gateway#features}
  */
  readonly features: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/gateway#id Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key-value pairs to classify the network gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/gateway#labels Gateway#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Gateway name. Needs to be unique within the account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/gateway#name Gateway#name}
  */
  readonly name: string;
  /**
  * Zone in which the gateway will be hosted, e.g. `de-fra1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/gateway#zone Gateway#zone}
  */
  readonly zone: string;
  /**
  * router block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/gateway#router Gateway#router}
  */
  readonly router: GatewayRouter;
}
export interface GatewayRouter {
  /**
  * ID of the router attached to the gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/gateway#id Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function gatewayRouterToTerraform(struct?: GatewayRouterOutputReference | GatewayRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class GatewayRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayRouter | undefined) {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/gateway upcloud_gateway}
*/
export class Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/gateway upcloud_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_gateway',
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
    this._configuredStatus = config.configuredStatus;
    this._features = config.features;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._zone = config.zone;
    this._router.internalValue = config.router;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configured_status - computed: false, optional: true, required: false
  private _configuredStatus?: string; 
  public get configuredStatus() {
    return this.getStringAttribute('configured_status');
  }
  public set configuredStatus(value: string) {
    this._configuredStatus = value;
  }
  public resetConfiguredStatus() {
    this._configuredStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredStatusInput() {
    return this._configuredStatus;
  }

  // features - computed: false, optional: false, required: true
  private _features?: string[]; 
  public get features() {
    return cdktf.Fn.tolist(this.getListAttribute('features'));
  }
  public set features(value: string[]) {
    this._features = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // operational_state - computed: true, optional: false, required: false
  public get operationalState() {
    return this.getStringAttribute('operational_state');
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

  // router - computed: false, optional: false, required: true
  private _router = new GatewayRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: GatewayRouter) {
    this._router.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configured_status: cdktf.stringToTerraform(this._configuredStatus),
      features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._features),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      zone: cdktf.stringToTerraform(this._zone),
      router: gatewayRouterToTerraform(this._router.internalValue),
    };
  }
}
