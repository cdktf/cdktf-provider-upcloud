/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpcloudProviderConfig {
  /**
  * Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs#password UpcloudProvider#password}
  */
  readonly password?: string;
  /**
  * The duration (in seconds) that the provider waits for an HTTP request towards UpCloud API to complete. Defaults to 120 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs#request_timeout_sec UpcloudProvider#request_timeout_sec}
  */
  readonly requestTimeoutSec?: number;
  /**
  * Maximum number of retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs#retry_max UpcloudProvider#retry_max}
  */
  readonly retryMax?: number;
  /**
  * Maximum time to wait between retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs#retry_wait_max_sec UpcloudProvider#retry_wait_max_sec}
  */
  readonly retryWaitMaxSec?: number;
  /**
  * Minimum time to wait between retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs#retry_wait_min_sec UpcloudProvider#retry_wait_min_sec}
  */
  readonly retryWaitMinSec?: number;
  /**
  * UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs#username UpcloudProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs#alias UpcloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs upcloud}
*/
export class UpcloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpcloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpcloudProvider to import
  * @param importFromId The id of the existing UpcloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpcloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs upcloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpcloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UpcloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'upcloud',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.1.1',
        providerVersionConstraint: '~> 5.0'
      },
      terraformProviderSource: 'UpCloudLtd/upcloud'
    });
    this._password = config.password;
    this._requestTimeoutSec = config.requestTimeoutSec;
    this._retryMax = config.retryMax;
    this._retryWaitMaxSec = config.retryWaitMaxSec;
    this._retryWaitMinSec = config.retryWaitMinSec;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // request_timeout_sec - computed: false, optional: true, required: false
  private _requestTimeoutSec?: number; 
  public get requestTimeoutSec() {
    return this._requestTimeoutSec;
  }
  public set requestTimeoutSec(value: number | undefined) {
    this._requestTimeoutSec = value;
  }
  public resetRequestTimeoutSec() {
    this._requestTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutSecInput() {
    return this._requestTimeoutSec;
  }

  // retry_max - computed: false, optional: true, required: false
  private _retryMax?: number; 
  public get retryMax() {
    return this._retryMax;
  }
  public set retryMax(value: number | undefined) {
    this._retryMax = value;
  }
  public resetRetryMax() {
    this._retryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxInput() {
    return this._retryMax;
  }

  // retry_wait_max_sec - computed: false, optional: true, required: false
  private _retryWaitMaxSec?: number; 
  public get retryWaitMaxSec() {
    return this._retryWaitMaxSec;
  }
  public set retryWaitMaxSec(value: number | undefined) {
    this._retryWaitMaxSec = value;
  }
  public resetRetryWaitMaxSec() {
    this._retryWaitMaxSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitMaxSecInput() {
    return this._retryWaitMaxSec;
  }

  // retry_wait_min_sec - computed: false, optional: true, required: false
  private _retryWaitMinSec?: number; 
  public get retryWaitMinSec() {
    return this._retryWaitMinSec;
  }
  public set retryWaitMinSec(value: number | undefined) {
    this._retryWaitMinSec = value;
  }
  public resetRetryWaitMinSec() {
    this._retryWaitMinSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitMinSecInput() {
    return this._retryWaitMinSec;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      password: cdktf.stringToTerraform(this._password),
      request_timeout_sec: cdktf.numberToTerraform(this._requestTimeoutSec),
      retry_max: cdktf.numberToTerraform(this._retryMax),
      retry_wait_max_sec: cdktf.numberToTerraform(this._retryWaitMaxSec),
      retry_wait_min_sec: cdktf.numberToTerraform(this._retryWaitMinSec),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._requestTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_max: {
        value: cdktf.numberToHclTerraform(this._retryMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_wait_max_sec: {
        value: cdktf.numberToHclTerraform(this._retryWaitMaxSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_wait_min_sec: {
        value: cdktf.numberToHclTerraform(this._retryWaitMinSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
