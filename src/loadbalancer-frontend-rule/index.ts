/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerFrontendRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the load balancer frontend to which the frontend rule is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#frontend LoadbalancerFrontendRule#frontend}
  */
  readonly frontend: string;
  /**
  * Defines boolean operator used to combine multiple matchers. Defaults to `and`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#matching_condition LoadbalancerFrontendRule#matching_condition}
  */
  readonly matchingCondition?: string;
  /**
  * The name of the frontend rule. Must be unique within the frontend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}
  */
  readonly name: string;
  /**
  * Rule with the higher priority goes first. Rules with the same priority processed in alphabetical order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#priority LoadbalancerFrontendRule#priority}
  */
  readonly priority: number;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#actions LoadbalancerFrontendRule#actions}
  */
  readonly actions?: LoadbalancerFrontendRuleActions[] | cdktf.IResolvable;
  /**
  * matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#matchers LoadbalancerFrontendRule#matchers}
  */
  readonly matchers?: LoadbalancerFrontendRuleMatchers[] | cdktf.IResolvable;
}
export interface LoadbalancerFrontendRuleActionsHttpRedirect {
  /**
  * Target location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#location LoadbalancerFrontendRule#location}
  */
  readonly location?: string;
  /**
  * Target scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#scheme LoadbalancerFrontendRule#scheme}
  */
  readonly scheme?: string;
}

export function loadbalancerFrontendRuleActionsHttpRedirectToTerraform(struct?: LoadbalancerFrontendRuleActionsHttpRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function loadbalancerFrontendRuleActionsHttpRedirectToHclTerraform(struct?: LoadbalancerFrontendRuleActionsHttpRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleActionsHttpRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleActionsHttpRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleActionsHttpRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._scheme = value.scheme;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class LoadbalancerFrontendRuleActionsHttpRedirectList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleActionsHttpRedirect[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleActionsHttpRedirectOutputReference {
    return new LoadbalancerFrontendRuleActionsHttpRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleActionsHttpReturn {
  /**
  * Content type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#content_type LoadbalancerFrontendRule#content_type}
  */
  readonly contentType: string;
  /**
  * The payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#payload LoadbalancerFrontendRule#payload}
  */
  readonly payload: string;
  /**
  * HTTP status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#status LoadbalancerFrontendRule#status}
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


export function loadbalancerFrontendRuleActionsHttpReturnToHclTerraform(struct?: LoadbalancerFrontendRuleActionsHttpReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleActionsHttpReturnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleActionsHttpReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleActionsHttpReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._payload = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._payload = value.payload;
      this._status = value.status;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class LoadbalancerFrontendRuleActionsHttpReturnList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleActionsHttpReturn[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleActionsHttpReturnOutputReference {
    return new LoadbalancerFrontendRuleActionsHttpReturnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleActionsSetForwardedHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#active LoadbalancerFrontendRule#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function loadbalancerFrontendRuleActionsSetForwardedHeadersToTerraform(struct?: LoadbalancerFrontendRuleActionsSetForwardedHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function loadbalancerFrontendRuleActionsSetForwardedHeadersToHclTerraform(struct?: LoadbalancerFrontendRuleActionsSetForwardedHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleActionsSetForwardedHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleActionsSetForwardedHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
    }
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}

export class LoadbalancerFrontendRuleActionsSetForwardedHeadersList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleActionsSetForwardedHeaders[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference {
    return new LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleActionsSetRequestHeader {
  /**
  * Header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#header LoadbalancerFrontendRule#header}
  */
  readonly header: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value?: string;
}

export function loadbalancerFrontendRuleActionsSetRequestHeaderToTerraform(struct?: LoadbalancerFrontendRuleActionsSetRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleActionsSetRequestHeaderToHclTerraform(struct?: LoadbalancerFrontendRuleActionsSetRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleActionsSetRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleActionsSetRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._value = value.value;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleActionsSetRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleActionsSetRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference {
    return new LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleActionsSetResponseHeader {
  /**
  * Header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#header LoadbalancerFrontendRule#header}
  */
  readonly header: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value?: string;
}

export function loadbalancerFrontendRuleActionsSetResponseHeaderToTerraform(struct?: LoadbalancerFrontendRuleActionsSetResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleActionsSetResponseHeaderToHclTerraform(struct?: LoadbalancerFrontendRuleActionsSetResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleActionsSetResponseHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleActionsSetResponseHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._value = value.value;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleActionsSetResponseHeaderList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleActionsSetResponseHeader[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference {
    return new LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleActionsTcpReject {
  /**
  * Indicates if the rule is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#active LoadbalancerFrontendRule#active}
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


export function loadbalancerFrontendRuleActionsTcpRejectToHclTerraform(struct?: LoadbalancerFrontendRuleActionsTcpReject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleActionsTcpRejectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleActionsTcpReject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleActionsTcpReject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
    }
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}

export class LoadbalancerFrontendRuleActionsTcpRejectList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleActionsTcpReject[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleActionsTcpRejectOutputReference {
    return new LoadbalancerFrontendRuleActionsTcpRejectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleActionsUseBackend {
  /**
  * The name of the backend where traffic will be routed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#backend_name LoadbalancerFrontendRule#backend_name}
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


export function loadbalancerFrontendRuleActionsUseBackendToHclTerraform(struct?: LoadbalancerFrontendRuleActionsUseBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_name: {
      value: cdktf.stringToHclTerraform(struct!.backendName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleActionsUseBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleActionsUseBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendName = this._backendName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleActionsUseBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendName = value.backendName;
    }
  }

  // backend_name - computed: false, optional: false, required: true
  private _backendName?: string; 
  public get backendName() {
    return this.getStringAttribute('backend_name');
  }
  public set backendName(value: string) {
    this._backendName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendNameInput() {
    return this._backendName;
  }
}

export class LoadbalancerFrontendRuleActionsUseBackendList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleActionsUseBackend[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleActionsUseBackendOutputReference {
    return new LoadbalancerFrontendRuleActionsUseBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleActions {
  /**
  * http_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#http_redirect LoadbalancerFrontendRule#http_redirect}
  */
  readonly httpRedirect?: LoadbalancerFrontendRuleActionsHttpRedirect[] | cdktf.IResolvable;
  /**
  * http_return block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#http_return LoadbalancerFrontendRule#http_return}
  */
  readonly httpReturn?: LoadbalancerFrontendRuleActionsHttpReturn[] | cdktf.IResolvable;
  /**
  * set_forwarded_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#set_forwarded_headers LoadbalancerFrontendRule#set_forwarded_headers}
  */
  readonly setForwardedHeaders?: LoadbalancerFrontendRuleActionsSetForwardedHeaders[] | cdktf.IResolvable;
  /**
  * set_request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#set_request_header LoadbalancerFrontendRule#set_request_header}
  */
  readonly setRequestHeader?: LoadbalancerFrontendRuleActionsSetRequestHeader[] | cdktf.IResolvable;
  /**
  * set_response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#set_response_header LoadbalancerFrontendRule#set_response_header}
  */
  readonly setResponseHeader?: LoadbalancerFrontendRuleActionsSetResponseHeader[] | cdktf.IResolvable;
  /**
  * tcp_reject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#tcp_reject LoadbalancerFrontendRule#tcp_reject}
  */
  readonly tcpReject?: LoadbalancerFrontendRuleActionsTcpReject[] | cdktf.IResolvable;
  /**
  * use_backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#use_backend LoadbalancerFrontendRule#use_backend}
  */
  readonly useBackend?: LoadbalancerFrontendRuleActionsUseBackend[] | cdktf.IResolvable;
}

export function loadbalancerFrontendRuleActionsToTerraform(struct?: LoadbalancerFrontendRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_redirect: cdktf.listMapper(loadbalancerFrontendRuleActionsHttpRedirectToTerraform, true)(struct!.httpRedirect),
    http_return: cdktf.listMapper(loadbalancerFrontendRuleActionsHttpReturnToTerraform, true)(struct!.httpReturn),
    set_forwarded_headers: cdktf.listMapper(loadbalancerFrontendRuleActionsSetForwardedHeadersToTerraform, true)(struct!.setForwardedHeaders),
    set_request_header: cdktf.listMapper(loadbalancerFrontendRuleActionsSetRequestHeaderToTerraform, true)(struct!.setRequestHeader),
    set_response_header: cdktf.listMapper(loadbalancerFrontendRuleActionsSetResponseHeaderToTerraform, true)(struct!.setResponseHeader),
    tcp_reject: cdktf.listMapper(loadbalancerFrontendRuleActionsTcpRejectToTerraform, true)(struct!.tcpReject),
    use_backend: cdktf.listMapper(loadbalancerFrontendRuleActionsUseBackendToTerraform, true)(struct!.useBackend),
  }
}


export function loadbalancerFrontendRuleActionsToHclTerraform(struct?: LoadbalancerFrontendRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_redirect: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleActionsHttpRedirectToHclTerraform, true)(struct!.httpRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleActionsHttpRedirectList",
    },
    http_return: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleActionsHttpReturnToHclTerraform, true)(struct!.httpReturn),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleActionsHttpReturnList",
    },
    set_forwarded_headers: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleActionsSetForwardedHeadersToHclTerraform, true)(struct!.setForwardedHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleActionsSetForwardedHeadersList",
    },
    set_request_header: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleActionsSetRequestHeaderToHclTerraform, true)(struct!.setRequestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleActionsSetRequestHeaderList",
    },
    set_response_header: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleActionsSetResponseHeaderToHclTerraform, true)(struct!.setResponseHeader),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleActionsSetResponseHeaderList",
    },
    tcp_reject: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleActionsTcpRejectToHclTerraform, true)(struct!.tcpReject),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleActionsTcpRejectList",
    },
    use_backend: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleActionsUseBackendToHclTerraform, true)(struct!.useBackend),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleActionsUseBackendList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirect = this._httpRedirect?.internalValue;
    }
    if (this._httpReturn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReturn = this._httpReturn?.internalValue;
    }
    if (this._setForwardedHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setForwardedHeaders = this._setForwardedHeaders?.internalValue;
    }
    if (this._setRequestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setRequestHeader = this._setRequestHeader?.internalValue;
    }
    if (this._setResponseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setResponseHeader = this._setResponseHeader?.internalValue;
    }
    if (this._tcpReject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpReject = this._tcpReject?.internalValue;
    }
    if (this._useBackend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBackend = this._useBackend?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpRedirect.internalValue = undefined;
      this._httpReturn.internalValue = undefined;
      this._setForwardedHeaders.internalValue = undefined;
      this._setRequestHeader.internalValue = undefined;
      this._setResponseHeader.internalValue = undefined;
      this._tcpReject.internalValue = undefined;
      this._useBackend.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpRedirect.internalValue = value.httpRedirect;
      this._httpReturn.internalValue = value.httpReturn;
      this._setForwardedHeaders.internalValue = value.setForwardedHeaders;
      this._setRequestHeader.internalValue = value.setRequestHeader;
      this._setResponseHeader.internalValue = value.setResponseHeader;
      this._tcpReject.internalValue = value.tcpReject;
      this._useBackend.internalValue = value.useBackend;
    }
  }

  // http_redirect - computed: false, optional: true, required: false
  private _httpRedirect = new LoadbalancerFrontendRuleActionsHttpRedirectList(this, "http_redirect", false);
  public get httpRedirect() {
    return this._httpRedirect;
  }
  public putHttpRedirect(value: LoadbalancerFrontendRuleActionsHttpRedirect[] | cdktf.IResolvable) {
    this._httpRedirect.internalValue = value;
  }
  public resetHttpRedirect() {
    this._httpRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectInput() {
    return this._httpRedirect.internalValue;
  }

  // http_return - computed: false, optional: true, required: false
  private _httpReturn = new LoadbalancerFrontendRuleActionsHttpReturnList(this, "http_return", false);
  public get httpReturn() {
    return this._httpReturn;
  }
  public putHttpReturn(value: LoadbalancerFrontendRuleActionsHttpReturn[] | cdktf.IResolvable) {
    this._httpReturn.internalValue = value;
  }
  public resetHttpReturn() {
    this._httpReturn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReturnInput() {
    return this._httpReturn.internalValue;
  }

  // set_forwarded_headers - computed: false, optional: true, required: false
  private _setForwardedHeaders = new LoadbalancerFrontendRuleActionsSetForwardedHeadersList(this, "set_forwarded_headers", false);
  public get setForwardedHeaders() {
    return this._setForwardedHeaders;
  }
  public putSetForwardedHeaders(value: LoadbalancerFrontendRuleActionsSetForwardedHeaders[] | cdktf.IResolvable) {
    this._setForwardedHeaders.internalValue = value;
  }
  public resetSetForwardedHeaders() {
    this._setForwardedHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setForwardedHeadersInput() {
    return this._setForwardedHeaders.internalValue;
  }

  // set_request_header - computed: false, optional: true, required: false
  private _setRequestHeader = new LoadbalancerFrontendRuleActionsSetRequestHeaderList(this, "set_request_header", false);
  public get setRequestHeader() {
    return this._setRequestHeader;
  }
  public putSetRequestHeader(value: LoadbalancerFrontendRuleActionsSetRequestHeader[] | cdktf.IResolvable) {
    this._setRequestHeader.internalValue = value;
  }
  public resetSetRequestHeader() {
    this._setRequestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRequestHeaderInput() {
    return this._setRequestHeader.internalValue;
  }

  // set_response_header - computed: false, optional: true, required: false
  private _setResponseHeader = new LoadbalancerFrontendRuleActionsSetResponseHeaderList(this, "set_response_header", false);
  public get setResponseHeader() {
    return this._setResponseHeader;
  }
  public putSetResponseHeader(value: LoadbalancerFrontendRuleActionsSetResponseHeader[] | cdktf.IResolvable) {
    this._setResponseHeader.internalValue = value;
  }
  public resetSetResponseHeader() {
    this._setResponseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setResponseHeaderInput() {
    return this._setResponseHeader.internalValue;
  }

  // tcp_reject - computed: false, optional: true, required: false
  private _tcpReject = new LoadbalancerFrontendRuleActionsTcpRejectList(this, "tcp_reject", false);
  public get tcpReject() {
    return this._tcpReject;
  }
  public putTcpReject(value: LoadbalancerFrontendRuleActionsTcpReject[] | cdktf.IResolvable) {
    this._tcpReject.internalValue = value;
  }
  public resetTcpReject() {
    this._tcpReject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRejectInput() {
    return this._tcpReject.internalValue;
  }

  // use_backend - computed: false, optional: true, required: false
  private _useBackend = new LoadbalancerFrontendRuleActionsUseBackendList(this, "use_backend", false);
  public get useBackend() {
    return this._useBackend;
  }
  public putUseBackend(value: LoadbalancerFrontendRuleActionsUseBackend[] | cdktf.IResolvable) {
    this._useBackend.internalValue = value;
  }
  public resetUseBackend() {
    this._useBackend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBackendInput() {
    return this._useBackend.internalValue;
  }
}

export class LoadbalancerFrontendRuleActionsList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleActions[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleActionsOutputReference {
    return new LoadbalancerFrontendRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersBodySize {
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Integer value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: number;
}

export function loadbalancerFrontendRuleMatchersBodySizeToTerraform(struct?: LoadbalancerFrontendRuleMatchersBodySize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersBodySizeToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersBodySize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersBodySizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersBodySize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersBodySize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._method = value.method;
      this._value = value.value;
    }
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersBodySizeList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersBodySize[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersBodySizeOutputReference {
    return new LoadbalancerFrontendRuleMatchersBodySizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersBodySizeRange {
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Integer value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#range_end LoadbalancerFrontendRule#range_end}
  */
  readonly rangeEnd: number;
  /**
  * Integer value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#range_start LoadbalancerFrontendRule#range_start}
  */
  readonly rangeStart: number;
}

export function loadbalancerFrontendRuleMatchersBodySizeRangeToTerraform(struct?: LoadbalancerFrontendRuleMatchersBodySizeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    range_end: cdktf.numberToTerraform(struct!.rangeEnd),
    range_start: cdktf.numberToTerraform(struct!.rangeStart),
  }
}


export function loadbalancerFrontendRuleMatchersBodySizeRangeToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersBodySizeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    range_end: {
      value: cdktf.numberToHclTerraform(struct!.rangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_start: {
      value: cdktf.numberToHclTerraform(struct!.rangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersBodySizeRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._rangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEnd = this._rangeEnd;
    }
    if (this._rangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStart = this._rangeStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersBodySizeRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._rangeEnd = undefined;
      this._rangeStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._rangeEnd = value.rangeEnd;
      this._rangeStart = value.rangeStart;
    }
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // range_end - computed: false, optional: false, required: true
  private _rangeEnd?: number; 
  public get rangeEnd() {
    return this.getNumberAttribute('range_end');
  }
  public set rangeEnd(value: number) {
    this._rangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd;
  }

  // range_start - computed: false, optional: false, required: true
  private _rangeStart?: number; 
  public get rangeStart() {
    return this.getNumberAttribute('range_start');
  }
  public set rangeStart(value: number) {
    this._rangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }
}

export class LoadbalancerFrontendRuleMatchersBodySizeRangeList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersBodySizeRange[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference {
    return new LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersCookie {
  /**
  * Defines if case should be ignored. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Name of the argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}
  */
  readonly name: string;
  /**
  * String value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
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
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersCookieToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCase = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCase = value.ignoreCase;
      this._inverse = value.inverse;
      this._method = value.method;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // ignore_case - computed: true, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersCookieList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersCookie[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersCookieOutputReference {
    return new LoadbalancerFrontendRuleMatchersCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersHeader {
  /**
  * Defines if case should be ignored. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Name of the argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}
  */
  readonly name: string;
  /**
  * String value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
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
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersHeaderToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCase = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCase = value.ignoreCase;
      this._inverse = value.inverse;
      this._method = value.method;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // ignore_case - computed: true, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersHeaderList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersHeader[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersHeaderOutputReference {
    return new LoadbalancerFrontendRuleMatchersHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersHost {
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * String value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: string;
}

export function loadbalancerFrontendRuleMatchersHostToTerraform(struct?: LoadbalancerFrontendRuleMatchersHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersHostToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._value = value.value;
    }
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersHostList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersHost[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersHostOutputReference {
    return new LoadbalancerFrontendRuleMatchersHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersHttpMethod {
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * String value (`GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: string;
}

export function loadbalancerFrontendRuleMatchersHttpMethodToTerraform(struct?: LoadbalancerFrontendRuleMatchersHttpMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersHttpMethodToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersHttpMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersHttpMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersHttpMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersHttpMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._value = value.value;
    }
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersHttpMethodList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersHttpMethod[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersHttpMethodOutputReference {
    return new LoadbalancerFrontendRuleMatchersHttpMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersHttpStatus {
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Integer value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: number;
}

export function loadbalancerFrontendRuleMatchersHttpStatusToTerraform(struct?: LoadbalancerFrontendRuleMatchersHttpStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersHttpStatusToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersHttpStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersHttpStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersHttpStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersHttpStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._method = value.method;
      this._value = value.value;
    }
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersHttpStatusList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersHttpStatus[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersHttpStatusOutputReference {
    return new LoadbalancerFrontendRuleMatchersHttpStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersHttpStatusRange {
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Integer value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#range_end LoadbalancerFrontendRule#range_end}
  */
  readonly rangeEnd: number;
  /**
  * Integer value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#range_start LoadbalancerFrontendRule#range_start}
  */
  readonly rangeStart: number;
}

export function loadbalancerFrontendRuleMatchersHttpStatusRangeToTerraform(struct?: LoadbalancerFrontendRuleMatchersHttpStatusRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    range_end: cdktf.numberToTerraform(struct!.rangeEnd),
    range_start: cdktf.numberToTerraform(struct!.rangeStart),
  }
}


export function loadbalancerFrontendRuleMatchersHttpStatusRangeToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersHttpStatusRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    range_end: {
      value: cdktf.numberToHclTerraform(struct!.rangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_start: {
      value: cdktf.numberToHclTerraform(struct!.rangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersHttpStatusRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._rangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEnd = this._rangeEnd;
    }
    if (this._rangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStart = this._rangeStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersHttpStatusRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._rangeEnd = undefined;
      this._rangeStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._rangeEnd = value.rangeEnd;
      this._rangeStart = value.rangeStart;
    }
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // range_end - computed: false, optional: false, required: true
  private _rangeEnd?: number; 
  public get rangeEnd() {
    return this.getNumberAttribute('range_end');
  }
  public set rangeEnd(value: number) {
    this._rangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd;
  }

  // range_start - computed: false, optional: false, required: true
  private _rangeStart?: number; 
  public get rangeStart() {
    return this.getNumberAttribute('range_start');
  }
  public set rangeStart(value: number) {
    this._rangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }
}

export class LoadbalancerFrontendRuleMatchersHttpStatusRangeList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersHttpStatusRange[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference {
    return new LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersNumMembersUp {
  /**
  * The name of the `backend`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#backend_name LoadbalancerFrontendRule#backend_name}
  */
  readonly backendName: string;
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Integer value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
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
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersNumMembersUpToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersNumMembersUp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_name: {
      value: cdktf.stringToHclTerraform(struct!.backendName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersNumMembersUp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendName = this._backendName;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersNumMembersUp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendName = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendName = value.backendName;
      this._inverse = value.inverse;
      this._method = value.method;
      this._value = value.value;
    }
  }

  // backend_name - computed: false, optional: false, required: true
  private _backendName?: string; 
  public get backendName() {
    return this.getStringAttribute('backend_name');
  }
  public set backendName(value: string) {
    this._backendName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendNameInput() {
    return this._backendName;
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersNumMembersUpList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersNumMembersUp[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference {
    return new LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersPath {
  /**
  * Defines if case should be ignored. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * String value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
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
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersPathToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCase = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCase = value.ignoreCase;
      this._inverse = value.inverse;
      this._method = value.method;
      this._value = value.value;
    }
  }

  // ignore_case - computed: true, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersPathList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersPath[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersPathOutputReference {
    return new LoadbalancerFrontendRuleMatchersPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersRequestHeader {
  /**
  * Defines if case should be ignored. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Name of the argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}
  */
  readonly name: string;
  /**
  * String value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value?: string;
}

export function loadbalancerFrontendRuleMatchersRequestHeaderToTerraform(struct?: LoadbalancerFrontendRuleMatchersRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersRequestHeaderToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCase = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCase = value.ignoreCase;
      this._inverse = value.inverse;
      this._method = value.method;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // ignore_case - computed: true, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference {
    return new LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersResponseHeader {
  /**
  * Defines if case should be ignored. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Name of the argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}
  */
  readonly name: string;
  /**
  * String value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value?: string;
}

export function loadbalancerFrontendRuleMatchersResponseHeaderToTerraform(struct?: LoadbalancerFrontendRuleMatchersResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersResponseHeaderToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersResponseHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersResponseHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCase = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCase = value.ignoreCase;
      this._inverse = value.inverse;
      this._method = value.method;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // ignore_case - computed: true, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersResponseHeaderList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersResponseHeader[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference {
    return new LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersSrcIp {
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * IP address. CIDR masks are supported, e.g. `192.168.0.0/24`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: string;
}

export function loadbalancerFrontendRuleMatchersSrcIpToTerraform(struct?: LoadbalancerFrontendRuleMatchersSrcIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersSrcIpToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersSrcIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersSrcIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersSrcIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersSrcIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._value = value.value;
    }
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersSrcIpList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersSrcIp[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersSrcIpOutputReference {
    return new LoadbalancerFrontendRuleMatchersSrcIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersSrcPort {
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Integer value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
  */
  readonly value: number;
}

export function loadbalancerFrontendRuleMatchersSrcPortToTerraform(struct?: LoadbalancerFrontendRuleMatchersSrcPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersSrcPortToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersSrcPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersSrcPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersSrcPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersSrcPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._method = value.method;
      this._value = value.value;
    }
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersSrcPortList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersSrcPort[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersSrcPortOutputReference {
    return new LoadbalancerFrontendRuleMatchersSrcPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersSrcPortRange {
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Integer value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#range_end LoadbalancerFrontendRule#range_end}
  */
  readonly rangeEnd: number;
  /**
  * Integer value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#range_start LoadbalancerFrontendRule#range_start}
  */
  readonly rangeStart: number;
}

export function loadbalancerFrontendRuleMatchersSrcPortRangeToTerraform(struct?: LoadbalancerFrontendRuleMatchersSrcPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    range_end: cdktf.numberToTerraform(struct!.rangeEnd),
    range_start: cdktf.numberToTerraform(struct!.rangeStart),
  }
}


export function loadbalancerFrontendRuleMatchersSrcPortRangeToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersSrcPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    range_end: {
      value: cdktf.numberToHclTerraform(struct!.rangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_start: {
      value: cdktf.numberToHclTerraform(struct!.rangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersSrcPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._rangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEnd = this._rangeEnd;
    }
    if (this._rangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStart = this._rangeStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersSrcPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._rangeEnd = undefined;
      this._rangeStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._rangeEnd = value.rangeEnd;
      this._rangeStart = value.rangeStart;
    }
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // range_end - computed: false, optional: false, required: true
  private _rangeEnd?: number; 
  public get rangeEnd() {
    return this.getNumberAttribute('range_end');
  }
  public set rangeEnd(value: number) {
    this._rangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd;
  }

  // range_start - computed: false, optional: false, required: true
  private _rangeStart?: number; 
  public get rangeStart() {
    return this.getNumberAttribute('range_start');
  }
  public set rangeStart(value: number) {
    this._rangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }
}

export class LoadbalancerFrontendRuleMatchersSrcPortRangeList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersSrcPortRange[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference {
    return new LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersUrl {
  /**
  * Defines if case should be ignored. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * String value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
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
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersUrlToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCase = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCase = value.ignoreCase;
      this._inverse = value.inverse;
      this._method = value.method;
      this._value = value.value;
    }
  }

  // ignore_case - computed: true, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersUrlList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersUrl[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersUrlOutputReference {
    return new LoadbalancerFrontendRuleMatchersUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersUrlParam {
  /**
  * Defines if case should be ignored. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * Name of the argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}
  */
  readonly name: string;
  /**
  * String value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
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
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersUrlParamToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersUrlParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersUrlParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersUrlParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersUrlParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCase = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCase = value.ignoreCase;
      this._inverse = value.inverse;
      this._method = value.method;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // ignore_case - computed: true, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersUrlParamList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersUrlParam[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersUrlParamOutputReference {
    return new LoadbalancerFrontendRuleMatchersUrlParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchersUrlQuery {
  /**
  * Defines if case should be ignored. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Defines if the condition should be inverted. Works similarly to logical NOT operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}
  */
  readonly method: string;
  /**
  * String value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}
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
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loadbalancerFrontendRuleMatchersUrlQueryToHclTerraform(struct?: LoadbalancerFrontendRuleMatchersUrlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersUrlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchersUrlQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchersUrlQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCase = undefined;
      this._inverse = undefined;
      this._method = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCase = value.ignoreCase;
      this._inverse = value.inverse;
      this._method = value.method;
      this._value = value.value;
    }
  }

  // ignore_case - computed: true, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LoadbalancerFrontendRuleMatchersUrlQueryList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchersUrlQuery[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersUrlQueryOutputReference {
    return new LoadbalancerFrontendRuleMatchersUrlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFrontendRuleMatchers {
  /**
  * body_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#body_size LoadbalancerFrontendRule#body_size}
  */
  readonly bodySize?: LoadbalancerFrontendRuleMatchersBodySize[] | cdktf.IResolvable;
  /**
  * body_size_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#body_size_range LoadbalancerFrontendRule#body_size_range}
  */
  readonly bodySizeRange?: LoadbalancerFrontendRuleMatchersBodySizeRange[] | cdktf.IResolvable;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#cookie LoadbalancerFrontendRule#cookie}
  */
  readonly cookie?: LoadbalancerFrontendRuleMatchersCookie[] | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#header LoadbalancerFrontendRule#header}
  */
  readonly header?: LoadbalancerFrontendRuleMatchersHeader[] | cdktf.IResolvable;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#host LoadbalancerFrontendRule#host}
  */
  readonly host?: LoadbalancerFrontendRuleMatchersHost[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#http_method LoadbalancerFrontendRule#http_method}
  */
  readonly httpMethod?: LoadbalancerFrontendRuleMatchersHttpMethod[] | cdktf.IResolvable;
  /**
  * http_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#http_status LoadbalancerFrontendRule#http_status}
  */
  readonly httpStatus?: LoadbalancerFrontendRuleMatchersHttpStatus[] | cdktf.IResolvable;
  /**
  * http_status_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#http_status_range LoadbalancerFrontendRule#http_status_range}
  */
  readonly httpStatusRange?: LoadbalancerFrontendRuleMatchersHttpStatusRange[] | cdktf.IResolvable;
  /**
  * num_members_up block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#num_members_up LoadbalancerFrontendRule#num_members_up}
  */
  readonly numMembersUp?: LoadbalancerFrontendRuleMatchersNumMembersUp[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#path LoadbalancerFrontendRule#path}
  */
  readonly path?: LoadbalancerFrontendRuleMatchersPath[] | cdktf.IResolvable;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#request_header LoadbalancerFrontendRule#request_header}
  */
  readonly requestHeader?: LoadbalancerFrontendRuleMatchersRequestHeader[] | cdktf.IResolvable;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#response_header LoadbalancerFrontendRule#response_header}
  */
  readonly responseHeader?: LoadbalancerFrontendRuleMatchersResponseHeader[] | cdktf.IResolvable;
  /**
  * src_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#src_ip LoadbalancerFrontendRule#src_ip}
  */
  readonly srcIp?: LoadbalancerFrontendRuleMatchersSrcIp[] | cdktf.IResolvable;
  /**
  * src_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#src_port LoadbalancerFrontendRule#src_port}
  */
  readonly srcPort?: LoadbalancerFrontendRuleMatchersSrcPort[] | cdktf.IResolvable;
  /**
  * src_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#src_port_range LoadbalancerFrontendRule#src_port_range}
  */
  readonly srcPortRange?: LoadbalancerFrontendRuleMatchersSrcPortRange[] | cdktf.IResolvable;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#url LoadbalancerFrontendRule#url}
  */
  readonly url?: LoadbalancerFrontendRuleMatchersUrl[] | cdktf.IResolvable;
  /**
  * url_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#url_param LoadbalancerFrontendRule#url_param}
  */
  readonly urlParam?: LoadbalancerFrontendRuleMatchersUrlParam[] | cdktf.IResolvable;
  /**
  * url_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#url_query LoadbalancerFrontendRule#url_query}
  */
  readonly urlQuery?: LoadbalancerFrontendRuleMatchersUrlQuery[] | cdktf.IResolvable;
}

export function loadbalancerFrontendRuleMatchersToTerraform(struct?: LoadbalancerFrontendRuleMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_size: cdktf.listMapper(loadbalancerFrontendRuleMatchersBodySizeToTerraform, true)(struct!.bodySize),
    body_size_range: cdktf.listMapper(loadbalancerFrontendRuleMatchersBodySizeRangeToTerraform, true)(struct!.bodySizeRange),
    cookie: cdktf.listMapper(loadbalancerFrontendRuleMatchersCookieToTerraform, true)(struct!.cookie),
    header: cdktf.listMapper(loadbalancerFrontendRuleMatchersHeaderToTerraform, true)(struct!.header),
    host: cdktf.listMapper(loadbalancerFrontendRuleMatchersHostToTerraform, true)(struct!.host),
    http_method: cdktf.listMapper(loadbalancerFrontendRuleMatchersHttpMethodToTerraform, true)(struct!.httpMethod),
    http_status: cdktf.listMapper(loadbalancerFrontendRuleMatchersHttpStatusToTerraform, true)(struct!.httpStatus),
    http_status_range: cdktf.listMapper(loadbalancerFrontendRuleMatchersHttpStatusRangeToTerraform, true)(struct!.httpStatusRange),
    num_members_up: cdktf.listMapper(loadbalancerFrontendRuleMatchersNumMembersUpToTerraform, true)(struct!.numMembersUp),
    path: cdktf.listMapper(loadbalancerFrontendRuleMatchersPathToTerraform, true)(struct!.path),
    request_header: cdktf.listMapper(loadbalancerFrontendRuleMatchersRequestHeaderToTerraform, true)(struct!.requestHeader),
    response_header: cdktf.listMapper(loadbalancerFrontendRuleMatchersResponseHeaderToTerraform, true)(struct!.responseHeader),
    src_ip: cdktf.listMapper(loadbalancerFrontendRuleMatchersSrcIpToTerraform, true)(struct!.srcIp),
    src_port: cdktf.listMapper(loadbalancerFrontendRuleMatchersSrcPortToTerraform, true)(struct!.srcPort),
    src_port_range: cdktf.listMapper(loadbalancerFrontendRuleMatchersSrcPortRangeToTerraform, true)(struct!.srcPortRange),
    url: cdktf.listMapper(loadbalancerFrontendRuleMatchersUrlToTerraform, true)(struct!.url),
    url_param: cdktf.listMapper(loadbalancerFrontendRuleMatchersUrlParamToTerraform, true)(struct!.urlParam),
    url_query: cdktf.listMapper(loadbalancerFrontendRuleMatchersUrlQueryToTerraform, true)(struct!.urlQuery),
  }
}


export function loadbalancerFrontendRuleMatchersToHclTerraform(struct?: LoadbalancerFrontendRuleMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_size: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersBodySizeToHclTerraform, true)(struct!.bodySize),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersBodySizeList",
    },
    body_size_range: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersBodySizeRangeToHclTerraform, true)(struct!.bodySizeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersBodySizeRangeList",
    },
    cookie: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersCookieToHclTerraform, true)(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersCookieList",
    },
    header: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersHeaderList",
    },
    host: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersHostList",
    },
    http_method: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersHttpMethodToHclTerraform, true)(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersHttpMethodList",
    },
    http_status: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersHttpStatusToHclTerraform, true)(struct!.httpStatus),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersHttpStatusList",
    },
    http_status_range: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersHttpStatusRangeToHclTerraform, true)(struct!.httpStatusRange),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersHttpStatusRangeList",
    },
    num_members_up: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersNumMembersUpToHclTerraform, true)(struct!.numMembersUp),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersNumMembersUpList",
    },
    path: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersPathList",
    },
    request_header: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersRequestHeaderToHclTerraform, true)(struct!.requestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersRequestHeaderList",
    },
    response_header: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersResponseHeaderToHclTerraform, true)(struct!.responseHeader),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersResponseHeaderList",
    },
    src_ip: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersSrcIpToHclTerraform, true)(struct!.srcIp),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersSrcIpList",
    },
    src_port: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersSrcPortToHclTerraform, true)(struct!.srcPort),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersSrcPortList",
    },
    src_port_range: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersSrcPortRangeToHclTerraform, true)(struct!.srcPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersSrcPortRangeList",
    },
    url: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersUrlToHclTerraform, true)(struct!.url),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersUrlList",
    },
    url_param: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersUrlParamToHclTerraform, true)(struct!.urlParam),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersUrlParamList",
    },
    url_query: {
      value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersUrlQueryToHclTerraform, true)(struct!.urlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerFrontendRuleMatchersUrlQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFrontendRuleMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerFrontendRuleMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodySize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodySize = this._bodySize?.internalValue;
    }
    if (this._bodySizeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodySizeRange = this._bodySizeRange?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._httpMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod?.internalValue;
    }
    if (this._httpStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus?.internalValue;
    }
    if (this._httpStatusRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatusRange = this._httpStatusRange?.internalValue;
    }
    if (this._numMembersUp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numMembersUp = this._numMembersUp?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    if (this._responseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader?.internalValue;
    }
    if (this._srcIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp?.internalValue;
    }
    if (this._srcPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort?.internalValue;
    }
    if (this._srcPortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRange = this._srcPortRange?.internalValue;
    }
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    if (this._urlParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlParam = this._urlParam?.internalValue;
    }
    if (this._urlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlQuery = this._urlQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFrontendRuleMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodySize.internalValue = undefined;
      this._bodySizeRange.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._header.internalValue = undefined;
      this._host.internalValue = undefined;
      this._httpMethod.internalValue = undefined;
      this._httpStatus.internalValue = undefined;
      this._httpStatusRange.internalValue = undefined;
      this._numMembersUp.internalValue = undefined;
      this._path.internalValue = undefined;
      this._requestHeader.internalValue = undefined;
      this._responseHeader.internalValue = undefined;
      this._srcIp.internalValue = undefined;
      this._srcPort.internalValue = undefined;
      this._srcPortRange.internalValue = undefined;
      this._url.internalValue = undefined;
      this._urlParam.internalValue = undefined;
      this._urlQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodySize.internalValue = value.bodySize;
      this._bodySizeRange.internalValue = value.bodySizeRange;
      this._cookie.internalValue = value.cookie;
      this._header.internalValue = value.header;
      this._host.internalValue = value.host;
      this._httpMethod.internalValue = value.httpMethod;
      this._httpStatus.internalValue = value.httpStatus;
      this._httpStatusRange.internalValue = value.httpStatusRange;
      this._numMembersUp.internalValue = value.numMembersUp;
      this._path.internalValue = value.path;
      this._requestHeader.internalValue = value.requestHeader;
      this._responseHeader.internalValue = value.responseHeader;
      this._srcIp.internalValue = value.srcIp;
      this._srcPort.internalValue = value.srcPort;
      this._srcPortRange.internalValue = value.srcPortRange;
      this._url.internalValue = value.url;
      this._urlParam.internalValue = value.urlParam;
      this._urlQuery.internalValue = value.urlQuery;
    }
  }

  // body_size - computed: false, optional: true, required: false
  private _bodySize = new LoadbalancerFrontendRuleMatchersBodySizeList(this, "body_size", false);
  public get bodySize() {
    return this._bodySize;
  }
  public putBodySize(value: LoadbalancerFrontendRuleMatchersBodySize[] | cdktf.IResolvable) {
    this._bodySize.internalValue = value;
  }
  public resetBodySize() {
    this._bodySize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodySizeInput() {
    return this._bodySize.internalValue;
  }

  // body_size_range - computed: false, optional: true, required: false
  private _bodySizeRange = new LoadbalancerFrontendRuleMatchersBodySizeRangeList(this, "body_size_range", false);
  public get bodySizeRange() {
    return this._bodySizeRange;
  }
  public putBodySizeRange(value: LoadbalancerFrontendRuleMatchersBodySizeRange[] | cdktf.IResolvable) {
    this._bodySizeRange.internalValue = value;
  }
  public resetBodySizeRange() {
    this._bodySizeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodySizeRangeInput() {
    return this._bodySizeRange.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new LoadbalancerFrontendRuleMatchersCookieList(this, "cookie", false);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: LoadbalancerFrontendRuleMatchersCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new LoadbalancerFrontendRuleMatchersHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: LoadbalancerFrontendRuleMatchersHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new LoadbalancerFrontendRuleMatchersHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: LoadbalancerFrontendRuleMatchersHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod = new LoadbalancerFrontendRuleMatchersHttpMethodList(this, "http_method", false);
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: LoadbalancerFrontendRuleMatchersHttpMethod[] | cdktf.IResolvable) {
    this._httpMethod.internalValue = value;
  }
  public resetHttpMethod() {
    this._httpMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod.internalValue;
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus = new LoadbalancerFrontendRuleMatchersHttpStatusList(this, "http_status", false);
  public get httpStatus() {
    return this._httpStatus;
  }
  public putHttpStatus(value: LoadbalancerFrontendRuleMatchersHttpStatus[] | cdktf.IResolvable) {
    this._httpStatus.internalValue = value;
  }
  public resetHttpStatus() {
    this._httpStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus.internalValue;
  }

  // http_status_range - computed: false, optional: true, required: false
  private _httpStatusRange = new LoadbalancerFrontendRuleMatchersHttpStatusRangeList(this, "http_status_range", false);
  public get httpStatusRange() {
    return this._httpStatusRange;
  }
  public putHttpStatusRange(value: LoadbalancerFrontendRuleMatchersHttpStatusRange[] | cdktf.IResolvable) {
    this._httpStatusRange.internalValue = value;
  }
  public resetHttpStatusRange() {
    this._httpStatusRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusRangeInput() {
    return this._httpStatusRange.internalValue;
  }

  // num_members_up - computed: false, optional: true, required: false
  private _numMembersUp = new LoadbalancerFrontendRuleMatchersNumMembersUpList(this, "num_members_up", false);
  public get numMembersUp() {
    return this._numMembersUp;
  }
  public putNumMembersUp(value: LoadbalancerFrontendRuleMatchersNumMembersUp[] | cdktf.IResolvable) {
    this._numMembersUp.internalValue = value;
  }
  public resetNumMembersUp() {
    this._numMembersUp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numMembersUpInput() {
    return this._numMembersUp.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new LoadbalancerFrontendRuleMatchersPathList(this, "path", false);
  public get path() {
    return this._path;
  }
  public putPath(value: LoadbalancerFrontendRuleMatchersPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new LoadbalancerFrontendRuleMatchersRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: LoadbalancerFrontendRuleMatchersRequestHeader[] | cdktf.IResolvable) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new LoadbalancerFrontendRuleMatchersResponseHeaderList(this, "response_header", false);
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: LoadbalancerFrontendRuleMatchersResponseHeader[] | cdktf.IResolvable) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp = new LoadbalancerFrontendRuleMatchersSrcIpList(this, "src_ip", false);
  public get srcIp() {
    return this._srcIp;
  }
  public putSrcIp(value: LoadbalancerFrontendRuleMatchersSrcIp[] | cdktf.IResolvable) {
    this._srcIp.internalValue = value;
  }
  public resetSrcIp() {
    this._srcIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp.internalValue;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort = new LoadbalancerFrontendRuleMatchersSrcPortList(this, "src_port", false);
  public get srcPort() {
    return this._srcPort;
  }
  public putSrcPort(value: LoadbalancerFrontendRuleMatchersSrcPort[] | cdktf.IResolvable) {
    this._srcPort.internalValue = value;
  }
  public resetSrcPort() {
    this._srcPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort.internalValue;
  }

  // src_port_range - computed: false, optional: true, required: false
  private _srcPortRange = new LoadbalancerFrontendRuleMatchersSrcPortRangeList(this, "src_port_range", false);
  public get srcPortRange() {
    return this._srcPortRange;
  }
  public putSrcPortRange(value: LoadbalancerFrontendRuleMatchersSrcPortRange[] | cdktf.IResolvable) {
    this._srcPortRange.internalValue = value;
  }
  public resetSrcPortRange() {
    this._srcPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeInput() {
    return this._srcPortRange.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url = new LoadbalancerFrontendRuleMatchersUrlList(this, "url", false);
  public get url() {
    return this._url;
  }
  public putUrl(value: LoadbalancerFrontendRuleMatchersUrl[] | cdktf.IResolvable) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }

  // url_param - computed: false, optional: true, required: false
  private _urlParam = new LoadbalancerFrontendRuleMatchersUrlParamList(this, "url_param", false);
  public get urlParam() {
    return this._urlParam;
  }
  public putUrlParam(value: LoadbalancerFrontendRuleMatchersUrlParam[] | cdktf.IResolvable) {
    this._urlParam.internalValue = value;
  }
  public resetUrlParam() {
    this._urlParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlParamInput() {
    return this._urlParam.internalValue;
  }

  // url_query - computed: false, optional: true, required: false
  private _urlQuery = new LoadbalancerFrontendRuleMatchersUrlQueryList(this, "url_query", false);
  public get urlQuery() {
    return this._urlQuery;
  }
  public putUrlQuery(value: LoadbalancerFrontendRuleMatchersUrlQuery[] | cdktf.IResolvable) {
    this._urlQuery.internalValue = value;
  }
  public resetUrlQuery() {
    this._urlQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlQueryInput() {
    return this._urlQuery.internalValue;
  }
}

export class LoadbalancerFrontendRuleMatchersList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerFrontendRuleMatchers[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerFrontendRuleMatchersOutputReference {
    return new LoadbalancerFrontendRuleMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule upcloud_loadbalancer_frontend_rule}
*/
export class LoadbalancerFrontendRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_frontend_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadbalancerFrontendRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadbalancerFrontendRule to import
  * @param importFromId The id of the existing LoadbalancerFrontendRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadbalancerFrontendRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_loadbalancer_frontend_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/loadbalancer_frontend_rule upcloud_loadbalancer_frontend_rule} Resource
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
        providerVersion: '5.14.0',
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
    this._frontend = config.frontend;
    this._matchingCondition = config.matchingCondition;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // matching_condition - computed: true, optional: true, required: false
  private _matchingCondition?: string; 
  public get matchingCondition() {
    return this.getStringAttribute('matching_condition');
  }
  public set matchingCondition(value: string) {
    this._matchingCondition = value;
  }
  public resetMatchingCondition() {
    this._matchingCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingConditionInput() {
    return this._matchingCondition;
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
  private _actions = new LoadbalancerFrontendRuleActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: LoadbalancerFrontendRuleActions[] | cdktf.IResolvable) {
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
  private _matchers = new LoadbalancerFrontendRuleMatchersList(this, "matchers", false);
  public get matchers() {
    return this._matchers;
  }
  public putMatchers(value: LoadbalancerFrontendRuleMatchers[] | cdktf.IResolvable) {
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
      matching_condition: cdktf.stringToTerraform(this._matchingCondition),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      actions: cdktf.listMapper(loadbalancerFrontendRuleActionsToTerraform, true)(this._actions.internalValue),
      matchers: cdktf.listMapper(loadbalancerFrontendRuleMatchersToTerraform, true)(this._matchers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      frontend: {
        value: cdktf.stringToHclTerraform(this._frontend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matching_condition: {
        value: cdktf.stringToHclTerraform(this._matchingCondition),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      actions: {
        value: cdktf.listMapperHcl(loadbalancerFrontendRuleActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadbalancerFrontendRuleActionsList",
      },
      matchers: {
        value: cdktf.listMapperHcl(loadbalancerFrontendRuleMatchersToHclTerraform, true)(this._matchers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadbalancerFrontendRuleMatchersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
