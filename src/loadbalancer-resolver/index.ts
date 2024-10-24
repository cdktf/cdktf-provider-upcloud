// https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerResolverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to cache invalid results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver#cache_invalid LoadbalancerResolver#cache_invalid}
  */
  readonly cacheInvalid: number;
  /**
  * Time in seconds to cache valid results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver#cache_valid LoadbalancerResolver#cache_valid}
  */
  readonly cacheValid: number;
  /**
  * ID of the load balancer to which the resolver is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver#loadbalancer LoadbalancerResolver#loadbalancer}
  */
  readonly loadbalancer: string;
  /**
  * The name of the resolver. Must be unique within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver#name LoadbalancerResolver#name}
  */
  readonly name: string;
  /**
  * List of nameserver IP addresses. Nameserver can reside in public internet or in customer private network. Port is optional, if missing then default 53 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver#nameservers LoadbalancerResolver#nameservers}
  */
  readonly nameservers: string[];
  /**
  * Number of retries on failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver#retries LoadbalancerResolver#retries}
  */
  readonly retries: number;
  /**
  * Timeout for the query in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver#timeout LoadbalancerResolver#timeout}
  */
  readonly timeout: number;
  /**
  * Timeout for the query retries in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver#timeout_retry LoadbalancerResolver#timeout_retry}
  */
  readonly timeoutRetry: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver upcloud_loadbalancer_resolver}
*/
export class LoadbalancerResolver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_resolver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadbalancerResolver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadbalancerResolver to import
  * @param importFromId The id of the existing LoadbalancerResolver that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadbalancerResolver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_loadbalancer_resolver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/loadbalancer_resolver upcloud_loadbalancer_resolver} Resource
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
        providerVersion: '5.13.0',
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
    this._cacheInvalid = config.cacheInvalid;
    this._cacheValid = config.cacheValid;
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
      loadbalancer: cdktf.stringToTerraform(this._loadbalancer),
      name: cdktf.stringToTerraform(this._name),
      nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameservers),
      retries: cdktf.numberToTerraform(this._retries),
      timeout: cdktf.numberToTerraform(this._timeout),
      timeout_retry: cdktf.numberToTerraform(this._timeoutRetry),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_invalid: {
        value: cdktf.numberToHclTerraform(this._cacheInvalid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_valid: {
        value: cdktf.numberToHclTerraform(this._cacheValid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_retry: {
        value: cdktf.numberToHclTerraform(this._timeoutRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
