/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerFrontendConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the backend where traffic will be routed by default. The default backend can be overridden in frontend rules.
  * 
  * 	Note that the frontend resource depends on the default backend resource. Use the `name` field of a backend resource as the value for this field (like in the example above) or the `depends_on` meta argument to ensure the resources are created and destroyed in the correct order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#default_backend_name LoadbalancerFrontend#default_backend_name}
  */
  readonly defaultBackendName: string;
  /**
  * UUID of the load balancer to which the frontend is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#loadbalancer LoadbalancerFrontend#loadbalancer}
  */
  readonly loadbalancer: string;
  /**
  * When load balancer operating in `tcp` mode it acts as a layer 4 proxy. In `http` mode it acts as a layer 7 proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#mode LoadbalancerFrontend#mode}
  */
  readonly mode: string;
  /**
  * The name of the frontend. Must be unique within the load balancer service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}
  */
  readonly name: string;
  /**
  * Port to listen for incoming requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#port LoadbalancerFrontend#port}
  */
  readonly port: number;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#networks LoadbalancerFrontend#networks}
  */
  readonly networks?: LoadbalancerFrontendNetworks[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#properties LoadbalancerFrontend#properties}
  */
  readonly properties?: LoadbalancerFrontendProperties[] | cdktf.IResolvable;
}
export interface LoadbalancerFrontendNetworks {
  /**
  * Name of the load balancer network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}
  */
  readonly name: string;
}

export function loadbalancerFrontendNetworksToTerraform(struct?: LoadbalancerFrontendNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function loadbalancerFrontendNetworksToHclTerraform(struct?: LoadbalancerFrontendNetworks | cdktf.IResolvable): any {
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

export class LoadbalancerFrontendNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendNetworks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LoadbalancerFrontendNetworks | cdktf.IResolvable | undefined) {
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

export class LoadbalancerFrontendNetworksList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendNetworks[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendNetworksOutputReference {
    return new LoadbalancerFrontendNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendProperties {
  /**
  * Enable or disable HTTP/2 support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#http2_enabled LoadbalancerFrontend#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable inbound proxy protocol support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#inbound_proxy_protocol LoadbalancerFrontend#inbound_proxy_protocol}
  */
  readonly inboundProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Client request timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#timeout_client LoadbalancerFrontend#timeout_client}
  */
  readonly timeoutClient?: number;
}

export function loadbalancerFrontendPropertiesToTerraform(struct?: LoadbalancerFrontendProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    inbound_proxy_protocol: cdktf.booleanToTerraform(struct!.inboundProxyProtocol),
    timeout_client: cdktf.numberToTerraform(struct!.timeoutClient),
  }
}


export function loadbalancerFrontendPropertiesToHclTerraform(struct?: LoadbalancerFrontendProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http2_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.http2Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inbound_proxy_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.inboundProxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_client: {
      value: cdktf.numberToHclTerraform(struct!.timeoutClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http2Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Enabled = this._http2Enabled;
    }
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

  public set internalValue(value: LoadbalancerFrontendProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http2Enabled = undefined;
      this._inboundProxyProtocol = undefined;
      this._timeoutClient = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http2Enabled = value.http2Enabled;
      this._inboundProxyProtocol = value.inboundProxyProtocol;
      this._timeoutClient = value.timeoutClient;
    }
  }

  // http2_enabled - computed: true, optional: true, required: false
  private _http2Enabled?: boolean | cdktf.IResolvable; 
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled');
  }
  public set http2Enabled(value: boolean | cdktf.IResolvable) {
    this._http2Enabled = value;
  }
  public resetHttp2Enabled() {
    this._http2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnabledInput() {
    return this._http2Enabled;
  }

  // inbound_proxy_protocol - computed: true, optional: true, required: false
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

  // timeout_client - computed: true, optional: true, required: false
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

export class LoadbalancerFrontendPropertiesList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendProperties[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendPropertiesOutputReference {
    return new LoadbalancerFrontendPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend upcloud_loadbalancer_frontend}
*/
export class LoadbalancerFrontend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_frontend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadbalancerFrontend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadbalancerFrontend to import
  * @param importFromId The id of the existing LoadbalancerFrontend that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadbalancerFrontend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_loadbalancer_frontend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_frontend upcloud_loadbalancer_frontend} Resource
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
        providerVersion: '5.23.1',
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
    this._defaultBackendName = config.defaultBackendName;
    this._loadbalancer = config.loadbalancer;
    this._mode = config.mode;
    this._name = config.name;
    this._port = config.port;
    this._networks.internalValue = config.networks;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // networks - computed: false, optional: true, required: false
  private _networks = new LoadbalancerFrontendNetworksList(this, "networks", true);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: LoadbalancerFrontendNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new LoadbalancerFrontendPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: LoadbalancerFrontendProperties[] | cdktf.IResolvable) {
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
      loadbalancer: cdktf.stringToTerraform(this._loadbalancer),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      networks: cdktf.listMapper(loadbalancerFrontendNetworksToTerraform, true)(this._networks.internalValue),
      properties: cdktf.listMapper(loadbalancerFrontendPropertiesToTerraform, true)(this._properties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_backend_name: {
        value: cdktf.stringToHclTerraform(this._defaultBackendName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loadbalancer: {
        value: cdktf.stringToHclTerraform(this._loadbalancer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      networks: {
        value: cdktf.listMapperHcl(loadbalancerFrontendNetworksToHclTerraform, true)(this._networks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadbalancerFrontendNetworksList",
      },
      properties: {
        value: cdktf.listMapperHcl(loadbalancerFrontendPropertiesToHclTerraform, true)(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadbalancerFrontendPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
