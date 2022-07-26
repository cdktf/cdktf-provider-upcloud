// https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#id LoadbalancerBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the load balancer to which the backend is connected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#loadbalancer LoadbalancerBackend#loadbalancer}
  */
  readonly loadbalancer: string;
  /**
  * The name of the backend must be unique within the load balancer service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#name LoadbalancerBackend#name}
  */
  readonly name: string;
  /**
  * Domain Name Resolver used with dynamic type members.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#resolver_name LoadbalancerBackend#resolver_name}
  */
  readonly resolverName?: string;
  /**
  * properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#properties LoadbalancerBackend#properties}
  */
  readonly properties?: LoadbalancerBackendProperties;
}
export interface LoadbalancerBackendProperties {
  /**
  * Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for tcp type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_expected_status LoadbalancerBackend#health_check_expected_status}
  */
  readonly healthCheckExpectedStatus?: number;
  /**
  * Sets how many failed health checks are allowed until the backend member is taken off from the rotation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_fall LoadbalancerBackend#health_check_fall}
  */
  readonly healthCheckFall?: number;
  /**
  * Interval between health checks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_interval LoadbalancerBackend#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Sets how many passing checks there must be before returning the backend member to the rotation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_rise LoadbalancerBackend#health_check_rise}
  */
  readonly healthCheckRise?: number;
  /**
  * Health check type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_type LoadbalancerBackend#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Target path for health check HTTP GET requests. Ignored for tcp type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#health_check_url LoadbalancerBackend#health_check_url}
  */
  readonly healthCheckUrl?: string;
  /**
  * Enable outbound proxy protocol by setting the desired version. Empty string disables proxy protocol.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#outbound_proxy_protocol LoadbalancerBackend#outbound_proxy_protocol}
  */
  readonly outboundProxyProtocol?: string;
  /**
  * Sets sticky session cookie name. Empty string disables sticky session.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#sticky_session_cookie_name LoadbalancerBackend#sticky_session_cookie_name}
  */
  readonly stickySessionCookieName?: string;
  /**
  * Backend server timeout in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#timeout_server LoadbalancerBackend#timeout_server}
  */
  readonly timeoutServer?: number;
  /**
  * Maximum inactivity time on the client and server side for tunnels in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#timeout_tunnel LoadbalancerBackend#timeout_tunnel}
  */
  readonly timeoutTunnel?: number;
}

export function loadbalancerBackendPropertiesToTerraform(struct?: LoadbalancerBackendPropertiesOutputReference | LoadbalancerBackendProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_expected_status: cdktf.numberToTerraform(struct!.healthCheckExpectedStatus),
    health_check_fall: cdktf.numberToTerraform(struct!.healthCheckFall),
    health_check_interval: cdktf.numberToTerraform(struct!.healthCheckInterval),
    health_check_rise: cdktf.numberToTerraform(struct!.healthCheckRise),
    health_check_type: cdktf.stringToTerraform(struct!.healthCheckType),
    health_check_url: cdktf.stringToTerraform(struct!.healthCheckUrl),
    outbound_proxy_protocol: cdktf.stringToTerraform(struct!.outboundProxyProtocol),
    sticky_session_cookie_name: cdktf.stringToTerraform(struct!.stickySessionCookieName),
    timeout_server: cdktf.numberToTerraform(struct!.timeoutServer),
    timeout_tunnel: cdktf.numberToTerraform(struct!.timeoutTunnel),
  }
}

export class LoadbalancerBackendPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadbalancerBackendProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckExpectedStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckExpectedStatus = this._healthCheckExpectedStatus;
    }
    if (this._healthCheckFall !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckFall = this._healthCheckFall;
    }
    if (this._healthCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckInterval = this._healthCheckInterval;
    }
    if (this._healthCheckRise !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckRise = this._healthCheckRise;
    }
    if (this._healthCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckType = this._healthCheckType;
    }
    if (this._healthCheckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckUrl = this._healthCheckUrl;
    }
    if (this._outboundProxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundProxyProtocol = this._outboundProxyProtocol;
    }
    if (this._stickySessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickySessionCookieName = this._stickySessionCookieName;
    }
    if (this._timeoutServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutServer = this._timeoutServer;
    }
    if (this._timeoutTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutTunnel = this._timeoutTunnel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerBackendProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheckExpectedStatus = undefined;
      this._healthCheckFall = undefined;
      this._healthCheckInterval = undefined;
      this._healthCheckRise = undefined;
      this._healthCheckType = undefined;
      this._healthCheckUrl = undefined;
      this._outboundProxyProtocol = undefined;
      this._stickySessionCookieName = undefined;
      this._timeoutServer = undefined;
      this._timeoutTunnel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheckExpectedStatus = value.healthCheckExpectedStatus;
      this._healthCheckFall = value.healthCheckFall;
      this._healthCheckInterval = value.healthCheckInterval;
      this._healthCheckRise = value.healthCheckRise;
      this._healthCheckType = value.healthCheckType;
      this._healthCheckUrl = value.healthCheckUrl;
      this._outboundProxyProtocol = value.outboundProxyProtocol;
      this._stickySessionCookieName = value.stickySessionCookieName;
      this._timeoutServer = value.timeoutServer;
      this._timeoutTunnel = value.timeoutTunnel;
    }
  }

  // health_check_expected_status - computed: false, optional: true, required: false
  private _healthCheckExpectedStatus?: number; 
  public get healthCheckExpectedStatus() {
    return this.getNumberAttribute('health_check_expected_status');
  }
  public set healthCheckExpectedStatus(value: number) {
    this._healthCheckExpectedStatus = value;
  }
  public resetHealthCheckExpectedStatus() {
    this._healthCheckExpectedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckExpectedStatusInput() {
    return this._healthCheckExpectedStatus;
  }

  // health_check_fall - computed: false, optional: true, required: false
  private _healthCheckFall?: number; 
  public get healthCheckFall() {
    return this.getNumberAttribute('health_check_fall');
  }
  public set healthCheckFall(value: number) {
    this._healthCheckFall = value;
  }
  public resetHealthCheckFall() {
    this._healthCheckFall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckFallInput() {
    return this._healthCheckFall;
  }

  // health_check_interval - computed: false, optional: true, required: false
  private _healthCheckInterval?: number; 
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: number) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
  }

  // health_check_rise - computed: false, optional: true, required: false
  private _healthCheckRise?: number; 
  public get healthCheckRise() {
    return this.getNumberAttribute('health_check_rise');
  }
  public set healthCheckRise(value: number) {
    this._healthCheckRise = value;
  }
  public resetHealthCheckRise() {
    this._healthCheckRise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckRiseInput() {
    return this._healthCheckRise;
  }

  // health_check_type - computed: false, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // health_check_url - computed: false, optional: true, required: false
  private _healthCheckUrl?: string; 
  public get healthCheckUrl() {
    return this.getStringAttribute('health_check_url');
  }
  public set healthCheckUrl(value: string) {
    this._healthCheckUrl = value;
  }
  public resetHealthCheckUrl() {
    this._healthCheckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUrlInput() {
    return this._healthCheckUrl;
  }

  // outbound_proxy_protocol - computed: false, optional: true, required: false
  private _outboundProxyProtocol?: string; 
  public get outboundProxyProtocol() {
    return this.getStringAttribute('outbound_proxy_protocol');
  }
  public set outboundProxyProtocol(value: string) {
    this._outboundProxyProtocol = value;
  }
  public resetOutboundProxyProtocol() {
    this._outboundProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundProxyProtocolInput() {
    return this._outboundProxyProtocol;
  }

  // sticky_session_cookie_name - computed: false, optional: true, required: false
  private _stickySessionCookieName?: string; 
  public get stickySessionCookieName() {
    return this.getStringAttribute('sticky_session_cookie_name');
  }
  public set stickySessionCookieName(value: string) {
    this._stickySessionCookieName = value;
  }
  public resetStickySessionCookieName() {
    this._stickySessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionCookieNameInput() {
    return this._stickySessionCookieName;
  }

  // timeout_server - computed: false, optional: true, required: false
  private _timeoutServer?: number; 
  public get timeoutServer() {
    return this.getNumberAttribute('timeout_server');
  }
  public set timeoutServer(value: number) {
    this._timeoutServer = value;
  }
  public resetTimeoutServer() {
    this._timeoutServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutServerInput() {
    return this._timeoutServer;
  }

  // timeout_tunnel - computed: false, optional: true, required: false
  private _timeoutTunnel?: number; 
  public get timeoutTunnel() {
    return this.getNumberAttribute('timeout_tunnel');
  }
  public set timeoutTunnel(value: number) {
    this._timeoutTunnel = value;
  }
  public resetTimeoutTunnel() {
    this._timeoutTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTunnelInput() {
    return this._timeoutTunnel;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend upcloud_loadbalancer_backend}
*/
export class LoadbalancerBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_backend";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend upcloud_loadbalancer_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerBackendConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer_backend',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.5.0',
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
    this._id = config.id;
    this._loadbalancer = config.loadbalancer;
    this._name = config.name;
    this._resolverName = config.resolverName;
    this._properties.internalValue = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
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

  // resolver_name - computed: false, optional: true, required: false
  private _resolverName?: string; 
  public get resolverName() {
    return this.getStringAttribute('resolver_name');
  }
  public set resolverName(value: string) {
    this._resolverName = value;
  }
  public resetResolverName() {
    this._resolverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverNameInput() {
    return this._resolverName;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new LoadbalancerBackendPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: LoadbalancerBackendProperties) {
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
      id: cdktf.stringToTerraform(this._id),
      loadbalancer: cdktf.stringToTerraform(this._loadbalancer),
      name: cdktf.stringToTerraform(this._name),
      resolver_name: cdktf.stringToTerraform(this._resolverName),
      properties: loadbalancerBackendPropertiesToTerraform(this._properties.internalValue),
    };
  }
}
