// https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerFrontendConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the default backend where traffic will be routed. Note, default backend can be overwritten in frontend rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#default_backend_name LoadbalancerFrontend#default_backend_name}
  */
  readonly defaultBackendName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#id LoadbalancerFrontend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the load balancer to which the frontend is connected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#loadbalancer LoadbalancerFrontend#loadbalancer}
  */
  readonly loadbalancer: string;
  /**
  * When load balancer operating in `tcp` mode it acts as a layer 4 proxy. In `http` mode it acts as a layer 7 proxy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#mode LoadbalancerFrontend#mode}
  */
  readonly mode: string;
  /**
  * The name of the frontend must be unique within the load balancer service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#name LoadbalancerFrontend#name}
  */
  readonly name: string;
  /**
  * Port to listen incoming requests
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#port LoadbalancerFrontend#port}
  */
  readonly port: number;
  /**
  * properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#properties LoadbalancerFrontend#properties}
  */
  readonly properties?: LoadbalancerFrontendProperties;
}
export interface LoadbalancerFrontendProperties {
  /**
  * Enable or disable inbound proxy protocol support.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#inbound_proxy_protocol LoadbalancerFrontend#inbound_proxy_protocol}
  */
  readonly inboundProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Client request timeout in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#timeout_client LoadbalancerFrontend#timeout_client}
  */
  readonly timeoutClient?: number;
}

export function loadbalancerFrontendPropertiesToTerraform(struct?: LoadbalancerFrontendPropertiesOutputReference | LoadbalancerFrontendProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound_proxy_protocol: cdktf.booleanToTerraform(struct!.inboundProxyProtocol),
    timeout_client: cdktf.numberToTerraform(struct!.timeoutClient),
  }
}

export class LoadbalancerFrontendPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadbalancerFrontendProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundProxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundProxyProtocol = this._inboundProxyProtocol;
    }
    if (this._timeoutClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutClient = this._timeoutClient;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inboundProxyProtocol = undefined;
      this._timeoutClient = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inboundProxyProtocol = value.inboundProxyProtocol;
      this._timeoutClient = value.timeoutClient;
    }
  }

  // inbound_proxy_protocol - computed: false, optional: true, required: false
  private _inboundProxyProtocol?: boolean | cdktf.IResolvable; 
  public get inboundProxyProtocol() {
    return this.getBooleanAttribute('inbound_proxy_protocol');
  }
  public set inboundProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._inboundProxyProtocol = value;
  }
  public resetInboundProxyProtocol() {
    this._inboundProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundProxyProtocolInput() {
    return this._inboundProxyProtocol;
  }

  // timeout_client - computed: false, optional: true, required: false
  private _timeoutClient?: number; 
  public get timeoutClient() {
    return this.getNumberAttribute('timeout_client');
  }
  public set timeoutClient(value: number) {
    this._timeoutClient = value;
  }
  public resetTimeoutClient() {
    this._timeoutClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutClientInput() {
    return this._timeoutClient;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend upcloud_loadbalancer_frontend}
*/
export class LoadbalancerFrontend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_frontend";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend upcloud_loadbalancer_frontend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerFrontendConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerFrontendConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer_frontend',
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
    this._defaultBackendName = config.defaultBackendName;
    this._id = config.id;
    this._loadbalancer = config.loadbalancer;
    this._mode = config.mode;
    this._name = config.name;
    this._port = config.port;
    this._properties.internalValue = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_backend_name - computed: false, optional: false, required: true
  private _defaultBackendName?: string; 
  public get defaultBackendName() {
    return this.getStringAttribute('default_backend_name');
  }
  public set defaultBackendName(value: string) {
    this._defaultBackendName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBackendNameInput() {
    return this._defaultBackendName;
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

  // loadbalancer - computed: false, optional: false, required: true
  private _loadbalancer?: string; 
  public get loadbalancer() {
    return this.getStringAttribute('loadbalancer');
  }
  public set loadbalancer(value: string) {
    this._loadbalancer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerInput() {
    return this._loadbalancer;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // rules - computed: true, optional: false, required: false
  public get rules() {
    return this.getListAttribute('rules');
  }

  // tls_configs - computed: true, optional: false, required: false
  public get tlsConfigs() {
    return this.getListAttribute('tls_configs');
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new LoadbalancerFrontendPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: LoadbalancerFrontendProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_backend_name: cdktf.stringToTerraform(this._defaultBackendName),
      id: cdktf.stringToTerraform(this._id),
      loadbalancer: cdktf.stringToTerraform(this._loadbalancer),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      properties: loadbalancerFrontendPropertiesToTerraform(this._properties.internalValue),
    };
  }
}
