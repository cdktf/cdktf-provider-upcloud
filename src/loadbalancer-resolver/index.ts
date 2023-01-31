// https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerResolverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to cache invalid results.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver#cache_invalid LoadbalancerResolver#cache_invalid}
  */
  readonly cacheInvalid: number;
  /**
  * Time in seconds to cache valid results.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver#cache_valid LoadbalancerResolver#cache_valid}
  */
  readonly cacheValid: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver#id LoadbalancerResolver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the load balancer to which the resolver is connected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver#loadbalancer LoadbalancerResolver#loadbalancer}
  */
  readonly loadbalancer: string;
  /**
  * The name of the resolver must be unique within the service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver#name LoadbalancerResolver#name}
  */
  readonly name: string;
  /**
  * List of nameserver IP addresses. Nameserver can reside in public internet or in customer private network. 
				Port is optional, if missing then default 53 will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver#nameservers LoadbalancerResolver#nameservers}
  */
  readonly nameservers: string[];
  /**
  * Number of retries on failure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver#retries LoadbalancerResolver#retries}
  */
  readonly retries: number;
  /**
  * Timeout for the query in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver#timeout LoadbalancerResolver#timeout}
  */
  readonly timeout: number;
  /**
  * Timeout for the query retries in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver#timeout_retry LoadbalancerResolver#timeout_retry}
  */
  readonly timeoutRetry: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver upcloud_loadbalancer_resolver}
*/
export class LoadbalancerResolver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_resolver";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_resolver upcloud_loadbalancer_resolver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerResolverConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerResolverConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer_resolver',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.8.2',
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
    this._cacheInvalid = config.cacheInvalid;
    this._cacheValid = config.cacheValid;
    this._id = config.id;
    this._loadbalancer = config.loadbalancer;
    this._name = config.name;
    this._nameservers = config.nameservers;
    this._retries = config.retries;
    this._timeout = config.timeout;
    this._timeoutRetry = config.timeoutRetry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_invalid - computed: false, optional: false, required: true
  private _cacheInvalid?: number; 
  public get cacheInvalid() {
    return this.getNumberAttribute('cache_invalid');
  }
  public set cacheInvalid(value: number) {
    this._cacheInvalid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInvalidInput() {
    return this._cacheInvalid;
  }

  // cache_valid - computed: false, optional: false, required: true
  private _cacheValid?: number; 
  public get cacheValid() {
    return this.getNumberAttribute('cache_valid');
  }
  public set cacheValid(value: number) {
    this._cacheValid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheValidInput() {
    return this._cacheValid;
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

  // nameservers - computed: false, optional: false, required: true
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // retries - computed: false, optional: false, required: true
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // timeout_retry - computed: false, optional: false, required: true
  private _timeoutRetry?: number; 
  public get timeoutRetry() {
    return this.getNumberAttribute('timeout_retry');
  }
  public set timeoutRetry(value: number) {
    this._timeoutRetry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutRetryInput() {
    return this._timeoutRetry;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_invalid: cdktf.numberToTerraform(this._cacheInvalid),
      cache_valid: cdktf.numberToTerraform(this._cacheValid),
      id: cdktf.stringToTerraform(this._id),
      loadbalancer: cdktf.stringToTerraform(this._loadbalancer),
      name: cdktf.stringToTerraform(this._name),
      nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameservers),
      retries: cdktf.numberToTerraform(this._retries),
      timeout: cdktf.numberToTerraform(this._timeout),
      timeout_retry: cdktf.numberToTerraform(this._timeoutRetry),
    };
  }
}
