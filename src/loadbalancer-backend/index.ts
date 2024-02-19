// https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#id LoadbalancerBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the load balancer to which the backend is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#loadbalancer LoadbalancerBackend#loadbalancer}
  */
  readonly loadbalancer: string;
  /**
  * The name of the backend must be unique within the load balancer service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#name LoadbalancerBackend#name}
  */
  readonly name: string;
  /**
  * Domain Name Resolver used with dynamic type members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#resolver_name LoadbalancerBackend#resolver_name}
  */
  readonly resolverName?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#properties LoadbalancerBackend#properties}
  */
  readonly properties?: LoadbalancerBackendProperties;
}
export interface LoadbalancerBackendProperties {
  /**
  * Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for tcp type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#health_check_expected_status LoadbalancerBackend#health_check_expected_status}
  */
  readonly healthCheckExpectedStatus?: number;
  /**
  * Sets how many failed health checks are allowed until the backend member is taken off from the rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#health_check_fall LoadbalancerBackend#health_check_fall}
  */
  readonly healthCheckFall?: number;
  /**
  * Interval between health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#health_check_interval LoadbalancerBackend#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Sets how many passing checks there must be before returning the backend member to the rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#health_check_rise LoadbalancerBackend#health_check_rise}
  */
  readonly healthCheckRise?: number;
  /**
  * Enables certificate verification with the system CA certificate bundle. Works with https scheme in health_check_url, otherwise ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#health_check_tls_verify LoadbalancerBackend#health_check_tls_verify}
  */
  readonly healthCheckTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Health check type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#health_check_type LoadbalancerBackend#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Target path for health check HTTP GET requests. Ignored for tcp type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#health_check_url LoadbalancerBackend#health_check_url}
  */
  readonly healthCheckUrl?: string;
  /**
  * Allow HTTP/2 connections to backend members by utilizing ALPN extension of TLS protocol, therefore it can only be enabled when tls_enabled is set to true. Note: members should support HTTP/2 for this setting to work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#http2_enabled LoadbalancerBackend#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable outbound proxy protocol by setting the desired version. Empty string disables proxy protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#outbound_proxy_protocol LoadbalancerBackend#outbound_proxy_protocol}
  */
  readonly outboundProxyProtocol?: string;
  /**
  * Sets sticky session cookie name. Empty string disables sticky session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#sticky_session_cookie_name LoadbalancerBackend#sticky_session_cookie_name}
  */
  readonly stickySessionCookieName?: string;
  /**
  * Backend server timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#timeout_server LoadbalancerBackend#timeout_server}
  */
  readonly timeoutServer?: number;
  /**
  * Maximum inactivity time on the client and server side for tunnels in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#timeout_tunnel LoadbalancerBackend#timeout_tunnel}
  */
  readonly timeoutTunnel?: number;
  /**
  * Enables TLS connection from the load balancer to backend servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#tls_enabled LoadbalancerBackend#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * If enabled, then the system CA certificate bundle will be used for the certificate verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#tls_use_system_ca LoadbalancerBackend#tls_use_system_ca}
  */
  readonly tlsUseSystemCa?: boolean | cdktf.IResolvable;
  /**
  * Enables backend servers certificate verification. Please make sure that TLS config with the certificate bundle of type authority attached to the backend or `tls_use_system_ca` enabled. Note: `tls_verify` has preference over `health_check_tls_verify` when `tls_enabled` in true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#tls_verify LoadbalancerBackend#tls_verify}
  */
  readonly tlsVerify?: boolean | cdktf.IResolvable;
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
    health_check_tls_verify: cdktf.booleanToTerraform(struct!.healthCheckTlsVerify),
    health_check_type: cdktf.stringToTerraform(struct!.healthCheckType),
    health_check_url: cdktf.stringToTerraform(struct!.healthCheckUrl),
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    outbound_proxy_protocol: cdktf.stringToTerraform(struct!.outboundProxyProtocol),
    sticky_session_cookie_name: cdktf.stringToTerraform(struct!.stickySessionCookieName),
    timeout_server: cdktf.numberToTerraform(struct!.timeoutServer),
    timeout_tunnel: cdktf.numberToTerraform(struct!.timeoutTunnel),
    tls_enabled: cdktf.booleanToTerraform(struct!.tlsEnabled),
    tls_use_system_ca: cdktf.booleanToTerraform(struct!.tlsUseSystemCa),
    tls_verify: cdktf.booleanToTerraform(struct!.tlsVerify),
  }
}


export function loadbalancerBackendPropertiesToHclTerraform(struct?: LoadbalancerBackendPropertiesOutputReference | LoadbalancerBackendProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_expected_status: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckExpectedStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_fall: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckFall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_interval: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_rise: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckRise),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.healthCheckTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_check_type: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_url: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http2_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.http2Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outbound_proxy_protocol: {
      value: cdktf.stringToHclTerraform(struct!.outboundProxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sticky_session_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.stickySessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_server: {
      value: cdktf.numberToHclTerraform(struct!.timeoutServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_tunnel: {
      value: cdktf.numberToHclTerraform(struct!.timeoutTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_use_system_ca: {
      value: cdktf.booleanToHclTerraform(struct!.tlsUseSystemCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.tlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._healthCheckTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckTlsVerify = this._healthCheckTlsVerify;
    }
    if (this._healthCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckType = this._healthCheckType;
    }
    if (this._healthCheckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckUrl = this._healthCheckUrl;
    }
    if (this._http2Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Enabled = this._http2Enabled;
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
    if (this._tlsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEnabled = this._tlsEnabled;
    }
    if (this._tlsUseSystemCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsUseSystemCa = this._tlsUseSystemCa;
    }
    if (this._tlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerify = this._tlsVerify;
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
      this._healthCheckTlsVerify = undefined;
      this._healthCheckType = undefined;
      this._healthCheckUrl = undefined;
      this._http2Enabled = undefined;
      this._outboundProxyProtocol = undefined;
      this._stickySessionCookieName = undefined;
      this._timeoutServer = undefined;
      this._timeoutTunnel = undefined;
      this._tlsEnabled = undefined;
      this._tlsUseSystemCa = undefined;
      this._tlsVerify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheckExpectedStatus = value.healthCheckExpectedStatus;
      this._healthCheckFall = value.healthCheckFall;
      this._healthCheckInterval = value.healthCheckInterval;
      this._healthCheckRise = value.healthCheckRise;
      this._healthCheckTlsVerify = value.healthCheckTlsVerify;
      this._healthCheckType = value.healthCheckType;
      this._healthCheckUrl = value.healthCheckUrl;
      this._http2Enabled = value.http2Enabled;
      this._outboundProxyProtocol = value.outboundProxyProtocol;
      this._stickySessionCookieName = value.stickySessionCookieName;
      this._timeoutServer = value.timeoutServer;
      this._timeoutTunnel = value.timeoutTunnel;
      this._tlsEnabled = value.tlsEnabled;
      this._tlsUseSystemCa = value.tlsUseSystemCa;
      this._tlsVerify = value.tlsVerify;
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

  // health_check_tls_verify - computed: false, optional: true, required: false
  private _healthCheckTlsVerify?: boolean | cdktf.IResolvable; 
  public get healthCheckTlsVerify() {
    return this.getBooleanAttribute('health_check_tls_verify');
  }
  public set healthCheckTlsVerify(value: boolean | cdktf.IResolvable) {
    this._healthCheckTlsVerify = value;
  }
  public resetHealthCheckTlsVerify() {
    this._healthCheckTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTlsVerifyInput() {
    return this._healthCheckTlsVerify;
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

  // http2_enabled - computed: false, optional: true, required: false
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

  // tls_configs - computed: true, optional: false, required: false
  public get tlsConfigs() {
    return this.getListAttribute('tls_configs');
  }

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }

  // tls_use_system_ca - computed: false, optional: true, required: false
  private _tlsUseSystemCa?: boolean | cdktf.IResolvable; 
  public get tlsUseSystemCa() {
    return this.getBooleanAttribute('tls_use_system_ca');
  }
  public set tlsUseSystemCa(value: boolean | cdktf.IResolvable) {
    this._tlsUseSystemCa = value;
  }
  public resetTlsUseSystemCa() {
    this._tlsUseSystemCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsUseSystemCaInput() {
    return this._tlsUseSystemCa;
  }

  // tls_verify - computed: false, optional: true, required: false
  private _tlsVerify?: boolean | cdktf.IResolvable; 
  public get tlsVerify() {
    return this.getBooleanAttribute('tls_verify');
  }
  public set tlsVerify(value: boolean | cdktf.IResolvable) {
    this._tlsVerify = value;
  }
  public resetTlsVerify() {
    this._tlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerifyInput() {
    return this._tlsVerify;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend upcloud_loadbalancer_backend}
*/
export class LoadbalancerBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadbalancerBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadbalancerBackend to import
  * @param importFromId The id of the existing LoadbalancerBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadbalancerBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_loadbalancer_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_backend upcloud_loadbalancer_backend} Resource
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
        providerVersion: '4.1.0',
        providerVersionConstraint: '~> 4.0'
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

  // tls_configs - computed: true, optional: false, required: false
  public get tlsConfigs() {
    return this.getListAttribute('tls_configs');
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolver_name: {
        value: cdktf.stringToHclTerraform(this._resolverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: loadbalancerBackendPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadbalancerBackendPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
