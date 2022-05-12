// https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerFrontendRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the load balancer frontend to which the rule is connected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#frontend LoadbalancerFrontendRule#frontend}
  */
  readonly frontend: string;
  /**
  * The name of the frontend rule must be unique within the load balancer service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}
  */
  readonly name: string;
  /**
  * Rule with the higher priority goes first. Rules with the same priority processed in alphabetical order.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#priority LoadbalancerFrontendRule#priority}
  */
  readonly priority: number;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#actions LoadbalancerFrontendRule#actions}
  */
  readonly actions?: LoadbalancerFrontendRuleActions;
  /**
  * matchers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#matchers LoadbalancerFrontendRule#matchers}
  */
  readonly matchers?: LoadbalancerFrontendRuleMatchers;
}
export interface LoadbalancerFrontendRuleActionsHttpRedirect {
  /**
  * Target location.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#location LoadbalancerFrontendRule#location}
  */
  readonly location: string;
}

export function loadbalancerFrontendRuleActionsHttpRedirectToTerraform(struct?: LoadbalancerFrontendRuleActionsHttpRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
  }
}

export interface LoadbalancerFrontendRuleActionsHttpReturn {
  /**
  * Content type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#content_type LoadbalancerFrontendRule#content_type}
  */
  readonly contentType: string;
  /**
  * The payload.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#payload LoadbalancerFrontendRule#payload}
  */
  readonly payload: string;
  /**
  * HTTP status code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#status LoadbalancerFrontendRule#status}
  */
  readonly status: number;
}

export function loadbalancerFrontendRuleActionsHttpReturnToTerraform(struct?: LoadbalancerFrontendRuleActionsHttpReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    payload: cdktf.stringToTerraform(struct!.payload),
    status: cdktf.numberToTerraform(struct!.status),
  }
}

export interface LoadbalancerFrontendRuleActionsTcpReject {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#active LoadbalancerFrontendRule#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function loadbalancerFrontendRuleActionsTcpRejectToTerraform(struct?: LoadbalancerFrontendRuleActionsTcpReject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
  }
}

export interface LoadbalancerFrontendRuleActionsUseBackend {
  /**
  * The name of the backend where traffic will be routed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#backend_name LoadbalancerFrontendRule#backend_name}
  */
  readonly backendName: string;
}

export function loadbalancerFrontendRuleActionsUseBackendToTerraform(struct?: LoadbalancerFrontendRuleActionsUseBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_name: cdktf.stringToTerraform(struct!.backendName),
  }
}

export interface LoadbalancerFrontendRuleActions {
  /**
  * http_redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#http_redirect LoadbalancerFrontendRule#http_redirect}
  */
  readonly httpRedirect?: LoadbalancerFrontendRuleActionsHttpRedirect[] | cdktf.IResolvable;
  /**
  * http_return block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#http_return LoadbalancerFrontendRule#http_return}
  */
  readonly httpReturn?: LoadbalancerFrontendRuleActionsHttpReturn[] | cdktf.IResolvable;
  /**
  * tcp_reject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#tcp_reject LoadbalancerFrontendRule#tcp_reject}
  */
  readonly tcpReject?: LoadbalancerFrontendRuleActionsTcpReject[] | cdktf.IResolvable;
  /**
  * use_backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#use_backend LoadbalancerFrontendRule#use_backend}
  */
  readonly useBackend?: LoadbalancerFrontendRuleActionsUseBackend[] | cdktf.IResolvable;
}

export function loadbalancerFrontendRuleActionsToTerraform(struct?: LoadbalancerFrontendRuleActionsOutputReference | LoadbalancerFrontendRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_redirect: cdktf.listMapper(loadbalancerFrontendRuleActionsHttpRedirectToTerraform)(struct!.httpRedirect),
    http_return: cdktf.listMapper(loadbalancerFrontendRuleActionsHttpReturnToTerraform)(struct!.httpReturn),
    tcp_reject: cdktf.listMapper(loadbalancerFrontendRuleActionsTcpRejectToTerraform)(struct!.tcpReject),
    use_backend: cdktf.listMapper(loadbalancerFrontendRuleActionsUseBackendToTerraform)(struct!.useBackend),
  }
}

export class LoadbalancerFrontendRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadbalancerFrontendRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirect = this._httpRedirect;
    }
    if (this._httpReturn !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReturn = this._httpReturn;
    }
    if (this._tcpReject !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpReject = this._tcpReject;
    }
    if (this._useBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBackend = this._useBackend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpRedirect = undefined;
      this._httpReturn = undefined;
      this._tcpReject = undefined;
      this._useBackend = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpRedirect = value.httpRedirect;
      this._httpReturn = value.httpReturn;
      this._tcpReject = value.tcpReject;
      this._useBackend = value.useBackend;
    }
  }

  // http_redirect - computed: false, optional: true, required: false
  private _httpRedirect?: LoadbalancerFrontendRuleActionsHttpRedirect[] | cdktf.IResolvable; 
  public get httpRedirect() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_redirect');
  }
  public set httpRedirect(value: LoadbalancerFrontendRuleActionsHttpRedirect[] | cdktf.IResolvable) {
    this._httpRedirect = value;
  }
  public resetHttpRedirect() {
    this._httpRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectInput() {
    return this._httpRedirect;
  }

  // http_return - computed: false, optional: true, required: false
  private _httpReturn?: LoadbalancerFrontendRuleActionsHttpReturn[] | cdktf.IResolvable; 
  public get httpReturn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_return');
  }
  public set httpReturn(value: LoadbalancerFrontendRuleActionsHttpReturn[] | cdktf.IResolvable) {
    this._httpReturn = value;
  }
  public resetHttpReturn() {
    this._httpReturn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReturnInput() {
    return this._httpReturn;
  }

  // tcp_reject - computed: false, optional: true, required: false
  private _tcpReject?: LoadbalancerFrontendRuleActionsTcpReject[] | cdktf.IResolvable; 
  public get tcpReject() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_reject');
  }
  public set tcpReject(value: LoadbalancerFrontendRuleActionsTcpReject[] | cdktf.IResolvable) {
    this._tcpReject = value;
  }
  public resetTcpReject() {
    this._tcpReject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRejectInput() {
    return this._tcpReject;
  }

  // use_backend - computed: false, optional: true, required: false
  private _useBackend?: LoadbalancerFrontendRuleActionsUseBackend[] | cdktf.IResolvable; 
  public get useBackend() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('use_backend');
  }
  public set useBackend(value: LoadbalancerFrontendRuleActionsUseBackend[] | cdktf.IResolvable) {
    this._useBackend = value;
  }
  public resetUseBackend() {
    this._useBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBackendInput() {
    return this._useBackend;
  }
}
export interface LoadbalancerFrontendRuleMatchersBodySize {
  /**
  * Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Integer value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: number;
}

export function loadbalancerFrontendRuleMatchersBodySizeToTerraform(struct?: LoadbalancerFrontendRuleMatchersBodySize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchersBodySizeRange {
  /**
  * Integer value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#range_end LoadbalancerFrontendRule#range_end}
  */
  readonly rangeEnd: number;
  /**
  * Integer value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#range_start LoadbalancerFrontendRule#range_start}
  */
  readonly rangeStart: number;
}

export function loadbalancerFrontendRuleMatchersBodySizeRangeToTerraform(struct?: LoadbalancerFrontendRuleMatchersBodySizeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_end: cdktf.numberToTerraform(struct!.rangeEnd),
    range_start: cdktf.numberToTerraform(struct!.rangeStart),
  }
}

export interface LoadbalancerFrontendRuleMatchersCookie {
  /**
  * Ignore case, default `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Name of the argument.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}
  */
  readonly name: string;
  /**
  * String value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value?: string;
}

export function loadbalancerFrontendRuleMatchersCookieToTerraform(struct?: LoadbalancerFrontendRuleMatchersCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchersHeader {
  /**
  * Ignore case, default `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Name of the argument.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}
  */
  readonly name: string;
  /**
  * String value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value?: string;
}

export function loadbalancerFrontendRuleMatchersHeaderToTerraform(struct?: LoadbalancerFrontendRuleMatchersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchersHost {
  /**
  * String value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: string;
}

export function loadbalancerFrontendRuleMatchersHostToTerraform(struct?: LoadbalancerFrontendRuleMatchersHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchersHttpMethod {
  /**
  * String value (`GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: string;
}

export function loadbalancerFrontendRuleMatchersHttpMethodToTerraform(struct?: LoadbalancerFrontendRuleMatchersHttpMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchersNumMembersUp {
  /**
  * The name of the `backend` which members will be monitored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#backend_name LoadbalancerFrontendRule#backend_name}
  */
  readonly backendName: string;
  /**
  * Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Integer value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: number;
}

export function loadbalancerFrontendRuleMatchersNumMembersUpToTerraform(struct?: LoadbalancerFrontendRuleMatchersNumMembersUp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_name: cdktf.stringToTerraform(struct!.backendName),
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchersPath {
  /**
  * Ignore case, default `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * String value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value?: string;
}

export function loadbalancerFrontendRuleMatchersPathToTerraform(struct?: LoadbalancerFrontendRuleMatchersPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchersSrcIp {
  /**
  * IP address. CIDR masks are supported, e.g. `192.168.0.0/24`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: string;
}

export function loadbalancerFrontendRuleMatchersSrcIpToTerraform(struct?: LoadbalancerFrontendRuleMatchersSrcIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchersSrcPort {
  /**
  * Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Integer value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: number;
}

export function loadbalancerFrontendRuleMatchersSrcPortToTerraform(struct?: LoadbalancerFrontendRuleMatchersSrcPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchersSrcPortRange {
  /**
  * Integer value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#range_end LoadbalancerFrontendRule#range_end}
  */
  readonly rangeEnd: number;
  /**
  * Integer value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#range_start LoadbalancerFrontendRule#range_start}
  */
  readonly rangeStart: number;
}

export function loadbalancerFrontendRuleMatchersSrcPortRangeToTerraform(struct?: LoadbalancerFrontendRuleMatchersSrcPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_end: cdktf.numberToTerraform(struct!.rangeEnd),
    range_start: cdktf.numberToTerraform(struct!.rangeStart),
  }
}

export interface LoadbalancerFrontendRuleMatchersUrl {
  /**
  * Ignore case, default `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * String value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value?: string;
}

export function loadbalancerFrontendRuleMatchersUrlToTerraform(struct?: LoadbalancerFrontendRuleMatchersUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchersUrlParam {
  /**
  * Ignore case, default `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Name of the argument.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}
  */
  readonly name: string;
  /**
  * String value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value?: string;
}

export function loadbalancerFrontendRuleMatchersUrlParamToTerraform(struct?: LoadbalancerFrontendRuleMatchersUrlParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchersUrlQuery {
  /**
  * Ignore case, default `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * String value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value?: string;
}

export function loadbalancerFrontendRuleMatchersUrlQueryToTerraform(struct?: LoadbalancerFrontendRuleMatchersUrlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LoadbalancerFrontendRuleMatchers {
  /**
  * body_size block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#body_size LoadbalancerFrontendRule#body_size}
  */
  readonly bodySize?: LoadbalancerFrontendRuleMatchersBodySize[] | cdktf.IResolvable;
  /**
  * body_size_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#body_size_range LoadbalancerFrontendRule#body_size_range}
  */
  readonly bodySizeRange?: LoadbalancerFrontendRuleMatchersBodySizeRange[] | cdktf.IResolvable;
  /**
  * cookie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#cookie LoadbalancerFrontendRule#cookie}
  */
  readonly cookie?: LoadbalancerFrontendRuleMatchersCookie[] | cdktf.IResolvable;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#header LoadbalancerFrontendRule#header}
  */
  readonly header?: LoadbalancerFrontendRuleMatchersHeader[] | cdktf.IResolvable;
  /**
  * host block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#host LoadbalancerFrontendRule#host}
  */
  readonly host?: LoadbalancerFrontendRuleMatchersHost[] | cdktf.IResolvable;
  /**
  * http_method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#http_method LoadbalancerFrontendRule#http_method}
  */
  readonly httpMethod?: LoadbalancerFrontendRuleMatchersHttpMethod[] | cdktf.IResolvable;
  /**
  * num_members_up block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#num_members_up LoadbalancerFrontendRule#num_members_up}
  */
  readonly numMembersUp?: LoadbalancerFrontendRuleMatchersNumMembersUp[] | cdktf.IResolvable;
  /**
  * path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#path LoadbalancerFrontendRule#path}
  */
  readonly path?: LoadbalancerFrontendRuleMatchersPath[] | cdktf.IResolvable;
  /**
  * src_ip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#src_ip LoadbalancerFrontendRule#src_ip}
  */
  readonly srcIp?: LoadbalancerFrontendRuleMatchersSrcIp[] | cdktf.IResolvable;
  /**
  * src_port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#src_port LoadbalancerFrontendRule#src_port}
  */
  readonly srcPort?: LoadbalancerFrontendRuleMatchersSrcPort[] | cdktf.IResolvable;
  /**
  * src_port_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#src_port_range LoadbalancerFrontendRule#src_port_range}
  */
  readonly srcPortRange?: LoadbalancerFrontendRuleMatchersSrcPortRange[] | cdktf.IResolvable;
  /**
  * url block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#url LoadbalancerFrontendRule#url}
  */
  readonly url?: LoadbalancerFrontendRuleMatchersUrl[] | cdktf.IResolvable;
  /**
  * url_param block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#url_param LoadbalancerFrontendRule#url_param}
  */
  readonly urlParam?: LoadbalancerFrontendRuleMatchersUrlParam[] | cdktf.IResolvable;
  /**
  * url_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule#url_query LoadbalancerFrontendRule#url_query}
  */
  readonly urlQuery?: LoadbalancerFrontendRuleMatchersUrlQuery[] | cdktf.IResolvable;
}

export function loadbalancerFrontendRuleMatchersToTerraform(struct?: LoadbalancerFrontendRuleMatchersOutputReference | LoadbalancerFrontendRuleMatchers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_size: cdktf.listMapper(loadbalancerFrontendRuleMatchersBodySizeToTerraform)(struct!.bodySize),
    body_size_range: cdktf.listMapper(loadbalancerFrontendRuleMatchersBodySizeRangeToTerraform)(struct!.bodySizeRange),
    cookie: cdktf.listMapper(loadbalancerFrontendRuleMatchersCookieToTerraform)(struct!.cookie),
    header: cdktf.listMapper(loadbalancerFrontendRuleMatchersHeaderToTerraform)(struct!.header),
    host: cdktf.listMapper(loadbalancerFrontendRuleMatchersHostToTerraform)(struct!.host),
    http_method: cdktf.listMapper(loadbalancerFrontendRuleMatchersHttpMethodToTerraform)(struct!.httpMethod),
    num_members_up: cdktf.listMapper(loadbalancerFrontendRuleMatchersNumMembersUpToTerraform)(struct!.numMembersUp),
    path: cdktf.listMapper(loadbalancerFrontendRuleMatchersPathToTerraform)(struct!.path),
    src_ip: cdktf.listMapper(loadbalancerFrontendRuleMatchersSrcIpToTerraform)(struct!.srcIp),
    src_port: cdktf.listMapper(loadbalancerFrontendRuleMatchersSrcPortToTerraform)(struct!.srcPort),
    src_port_range: cdktf.listMapper(loadbalancerFrontendRuleMatchersSrcPortRangeToTerraform)(struct!.srcPortRange),
    url: cdktf.listMapper(loadbalancerFrontendRuleMatchersUrlToTerraform)(struct!.url),
    url_param: cdktf.listMapper(loadbalancerFrontendRuleMatchersUrlParamToTerraform)(struct!.urlParam),
    url_query: cdktf.listMapper(loadbalancerFrontendRuleMatchersUrlQueryToTerraform)(struct!.urlQuery),
  }
}

export class LoadbalancerFrontendRuleMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadbalancerFrontendRuleMatchers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodySize = this._bodySize;
    }
    if (this._bodySizeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodySizeRange = this._bodySizeRange;
    }
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._numMembersUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.numMembersUp = this._numMembersUp;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._srcPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRange = this._srcPortRange;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._urlParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlParam = this._urlParam;
    }
    if (this._urlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlQuery = this._urlQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodySize = undefined;
      this._bodySizeRange = undefined;
      this._cookie = undefined;
      this._header = undefined;
      this._host = undefined;
      this._httpMethod = undefined;
      this._numMembersUp = undefined;
      this._path = undefined;
      this._srcIp = undefined;
      this._srcPort = undefined;
      this._srcPortRange = undefined;
      this._url = undefined;
      this._urlParam = undefined;
      this._urlQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodySize = value.bodySize;
      this._bodySizeRange = value.bodySizeRange;
      this._cookie = value.cookie;
      this._header = value.header;
      this._host = value.host;
      this._httpMethod = value.httpMethod;
      this._numMembersUp = value.numMembersUp;
      this._path = value.path;
      this._srcIp = value.srcIp;
      this._srcPort = value.srcPort;
      this._srcPortRange = value.srcPortRange;
      this._url = value.url;
      this._urlParam = value.urlParam;
      this._urlQuery = value.urlQuery;
    }
  }

  // body_size - computed: false, optional: true, required: false
  private _bodySize?: LoadbalancerFrontendRuleMatchersBodySize[] | cdktf.IResolvable; 
  public get bodySize() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('body_size');
  }
  public set bodySize(value: LoadbalancerFrontendRuleMatchersBodySize[] | cdktf.IResolvable) {
    this._bodySize = value;
  }
  public resetBodySize() {
    this._bodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodySizeInput() {
    return this._bodySize;
  }

  // body_size_range - computed: false, optional: true, required: false
  private _bodySizeRange?: LoadbalancerFrontendRuleMatchersBodySizeRange[] | cdktf.IResolvable; 
  public get bodySizeRange() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('body_size_range');
  }
  public set bodySizeRange(value: LoadbalancerFrontendRuleMatchersBodySizeRange[] | cdktf.IResolvable) {
    this._bodySizeRange = value;
  }
  public resetBodySizeRange() {
    this._bodySizeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodySizeRangeInput() {
    return this._bodySizeRange;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie?: LoadbalancerFrontendRuleMatchersCookie[] | cdktf.IResolvable; 
  public get cookie() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cookie');
  }
  public set cookie(value: LoadbalancerFrontendRuleMatchersCookie[] | cdktf.IResolvable) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // header - computed: false, optional: true, required: false
  private _header?: LoadbalancerFrontendRuleMatchersHeader[] | cdktf.IResolvable; 
  public get header() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('header');
  }
  public set header(value: LoadbalancerFrontendRuleMatchersHeader[] | cdktf.IResolvable) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // host - computed: false, optional: true, required: false
  private _host?: LoadbalancerFrontendRuleMatchersHost[] | cdktf.IResolvable; 
  public get host() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host');
  }
  public set host(value: LoadbalancerFrontendRuleMatchersHost[] | cdktf.IResolvable) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: LoadbalancerFrontendRuleMatchersHttpMethod[] | cdktf.IResolvable; 
  public get httpMethod() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_method');
  }
  public set httpMethod(value: LoadbalancerFrontendRuleMatchersHttpMethod[] | cdktf.IResolvable) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // num_members_up - computed: false, optional: true, required: false
  private _numMembersUp?: LoadbalancerFrontendRuleMatchersNumMembersUp[] | cdktf.IResolvable; 
  public get numMembersUp() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('num_members_up');
  }
  public set numMembersUp(value: LoadbalancerFrontendRuleMatchersNumMembersUp[] | cdktf.IResolvable) {
    this._numMembersUp = value;
  }
  public resetNumMembersUp() {
    this._numMembersUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numMembersUpInput() {
    return this._numMembersUp;
  }

  // path - computed: false, optional: true, required: false
  private _path?: LoadbalancerFrontendRuleMatchersPath[] | cdktf.IResolvable; 
  public get path() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('path');
  }
  public set path(value: LoadbalancerFrontendRuleMatchersPath[] | cdktf.IResolvable) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: LoadbalancerFrontendRuleMatchersSrcIp[] | cdktf.IResolvable; 
  public get srcIp() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('src_ip');
  }
  public set srcIp(value: LoadbalancerFrontendRuleMatchersSrcIp[] | cdktf.IResolvable) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: LoadbalancerFrontendRuleMatchersSrcPort[] | cdktf.IResolvable; 
  public get srcPort() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('src_port');
  }
  public set srcPort(value: LoadbalancerFrontendRuleMatchersSrcPort[] | cdktf.IResolvable) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // src_port_range - computed: false, optional: true, required: false
  private _srcPortRange?: LoadbalancerFrontendRuleMatchersSrcPortRange[] | cdktf.IResolvable; 
  public get srcPortRange() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('src_port_range');
  }
  public set srcPortRange(value: LoadbalancerFrontendRuleMatchersSrcPortRange[] | cdktf.IResolvable) {
    this._srcPortRange = value;
  }
  public resetSrcPortRange() {
    this._srcPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeInput() {
    return this._srcPortRange;
  }

  // url - computed: false, optional: true, required: false
  private _url?: LoadbalancerFrontendRuleMatchersUrl[] | cdktf.IResolvable; 
  public get url() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('url');
  }
  public set url(value: LoadbalancerFrontendRuleMatchersUrl[] | cdktf.IResolvable) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_param - computed: false, optional: true, required: false
  private _urlParam?: LoadbalancerFrontendRuleMatchersUrlParam[] | cdktf.IResolvable; 
  public get urlParam() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('url_param');
  }
  public set urlParam(value: LoadbalancerFrontendRuleMatchersUrlParam[] | cdktf.IResolvable) {
    this._urlParam = value;
  }
  public resetUrlParam() {
    this._urlParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlParamInput() {
    return this._urlParam;
  }

  // url_query - computed: false, optional: true, required: false
  private _urlQuery?: LoadbalancerFrontendRuleMatchersUrlQuery[] | cdktf.IResolvable; 
  public get urlQuery() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('url_query');
  }
  public set urlQuery(value: LoadbalancerFrontendRuleMatchersUrlQuery[] | cdktf.IResolvable) {
    this._urlQuery = value;
  }
  public resetUrlQuery() {
    this._urlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlQueryInput() {
    return this._urlQuery;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule upcloud_loadbalancer_frontend_rule}
*/
export class LoadbalancerFrontendRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_frontend_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend_rule upcloud_loadbalancer_frontend_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerFrontendRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerFrontendRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer_frontend_rule',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.4.2',
        providerVersionConstraint: '~> 2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._frontend = config.frontend;
    this._name = config.name;
    this._priority = config.priority;
    this._actions.internalValue = config.actions;
    this._matchers.internalValue = config.matchers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public get id() {
    return this.getStringAttribute('id');
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new LoadbalancerFrontendRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: LoadbalancerFrontendRuleActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // matchers - computed: false, optional: true, required: false
  private _matchers = new LoadbalancerFrontendRuleMatchersOutputReference(this, "matchers");
  public get matchers() {
    return this._matchers;
  }
  public putMatchers(value: LoadbalancerFrontendRuleMatchers) {
    this._matchers.internalValue = value;
  }
  public resetMatchers() {
    this._matchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchersInput() {
    return this._matchers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      frontend: cdktf.stringToTerraform(this._frontend),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      actions: loadbalancerFrontendRuleActionsToTerraform(this._actions.internalValue),
      matchers: loadbalancerFrontendRuleMatchersToTerraform(this._matchers.internalValue),
    };
  }
}
