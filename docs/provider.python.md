# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-upcloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UpcloudProvider <a name="UpcloudProvider" id="@cdktf/provider-upcloud.provider.UpcloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs upcloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import provider

provider.UpcloudProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  password: str = None,
  request_timeout_sec: typing.Union[int, float] = None,
  retry_max: typing.Union[int, float] = None,
  retry_wait_max_sec: typing.Union[int, float] = None,
  retry_wait_min_sec: typing.Union[int, float] = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.requestTimeoutSec">request_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | The duration (in seconds) that the provider waits for an HTTP request towards UpCloud API to complete. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryMax">retry_max</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryWaitMaxSec">retry_wait_max_sec</a></code> | <code>typing.Union[int, float]</code> | Maximum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryWaitMinSec">retry_wait_min_sec</a></code> | <code>typing.Union[int, float]</code> | Minimum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.username">username</a></code> | <code>str</code> | UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#alias UpcloudProvider#alias}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.password"></a>

- *Type:* str

Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#password UpcloudProvider#password}

---

##### `request_timeout_sec`<sup>Optional</sup> <a name="request_timeout_sec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.requestTimeoutSec"></a>

- *Type:* typing.Union[int, float]

The duration (in seconds) that the provider waits for an HTTP request towards UpCloud API to complete.

Defaults to 120 seconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#request_timeout_sec UpcloudProvider#request_timeout_sec}

---

##### `retry_max`<sup>Optional</sup> <a name="retry_max" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryMax"></a>

- *Type:* typing.Union[int, float]

Maximum number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#retry_max UpcloudProvider#retry_max}

---

##### `retry_wait_max_sec`<sup>Optional</sup> <a name="retry_wait_max_sec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryWaitMaxSec"></a>

- *Type:* typing.Union[int, float]

Maximum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#retry_wait_max_sec UpcloudProvider#retry_wait_max_sec}

---

##### `retry_wait_min_sec`<sup>Optional</sup> <a name="retry_wait_min_sec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryWaitMinSec"></a>

- *Type:* typing.Union[int, float]

Minimum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#retry_wait_min_sec UpcloudProvider#retry_wait_min_sec}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.username"></a>

- *Type:* str

UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#username UpcloudProvider#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRequestTimeoutSec">reset_request_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryMax">reset_retry_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMaxSec">reset_retry_wait_max_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMinSec">reset_retry_wait_min_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_request_timeout_sec` <a name="reset_request_timeout_sec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRequestTimeoutSec"></a>

```python
def reset_request_timeout_sec() -> None
```

##### `reset_retry_max` <a name="reset_retry_max" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryMax"></a>

```python
def reset_retry_max() -> None
```

##### `reset_retry_wait_max_sec` <a name="reset_retry_wait_max_sec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMaxSec"></a>

```python
def reset_retry_wait_max_sec() -> None
```

##### `reset_retry_wait_min_sec` <a name="reset_retry_wait_min_sec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMinSec"></a>

```python
def reset_retry_wait_min_sec() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a UpcloudProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import provider

provider.UpcloudProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import provider

provider.UpcloudProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_upcloud import provider

provider.UpcloudProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import provider

provider.UpcloudProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a UpcloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UpcloudProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UpcloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UpcloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSecInput">request_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMaxInput">retry_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSecInput">retry_wait_max_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSecInput">retry_wait_min_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSec">request_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMax">retry_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSec">retry_wait_max_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSec">retry_wait_min_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `request_timeout_sec_input`<sup>Optional</sup> <a name="request_timeout_sec_input" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSecInput"></a>

```python
request_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_max_input`<sup>Optional</sup> <a name="retry_max_input" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMaxInput"></a>

```python
retry_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_wait_max_sec_input`<sup>Optional</sup> <a name="retry_wait_max_sec_input" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSecInput"></a>

```python
retry_wait_max_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_wait_min_sec_input`<sup>Optional</sup> <a name="retry_wait_min_sec_input" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSecInput"></a>

```python
retry_wait_min_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `request_timeout_sec`<sup>Optional</sup> <a name="request_timeout_sec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSec"></a>

```python
request_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_max`<sup>Optional</sup> <a name="retry_max" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMax"></a>

```python
retry_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_wait_max_sec`<sup>Optional</sup> <a name="retry_wait_max_sec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSec"></a>

```python
retry_wait_max_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_wait_min_sec`<sup>Optional</sup> <a name="retry_wait_min_sec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSec"></a>

```python
retry_wait_min_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UpcloudProviderConfig <a name="UpcloudProviderConfig" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import provider

provider.UpcloudProviderConfig(
  alias: str = None,
  password: str = None,
  request_timeout_sec: typing.Union[int, float] = None,
  retry_max: typing.Union[int, float] = None,
  retry_wait_max_sec: typing.Union[int, float] = None,
  retry_wait_min_sec: typing.Union[int, float] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.password">password</a></code> | <code>str</code> | Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.requestTimeoutSec">request_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | The duration (in seconds) that the provider waits for an HTTP request towards UpCloud API to complete. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryMax">retry_max</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMaxSec">retry_wait_max_sec</a></code> | <code>typing.Union[int, float]</code> | Maximum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMinSec">retry_wait_min_sec</a></code> | <code>typing.Union[int, float]</code> | Minimum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.username">username</a></code> | <code>str</code> | UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#alias UpcloudProvider#alias}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#password UpcloudProvider#password}

---

##### `request_timeout_sec`<sup>Optional</sup> <a name="request_timeout_sec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.requestTimeoutSec"></a>

```python
request_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration (in seconds) that the provider waits for an HTTP request towards UpCloud API to complete.

Defaults to 120 seconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#request_timeout_sec UpcloudProvider#request_timeout_sec}

---

##### `retry_max`<sup>Optional</sup> <a name="retry_max" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryMax"></a>

```python
retry_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#retry_max UpcloudProvider#retry_max}

---

##### `retry_wait_max_sec`<sup>Optional</sup> <a name="retry_wait_max_sec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMaxSec"></a>

```python
retry_wait_max_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#retry_wait_max_sec UpcloudProvider#retry_wait_max_sec}

---

##### `retry_wait_min_sec`<sup>Optional</sup> <a name="retry_wait_min_sec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMinSec"></a>

```python
retry_wait_min_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#retry_wait_min_sec UpcloudProvider#retry_wait_min_sec}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.username"></a>

```python
username: str
```

- *Type:* str

UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs#username UpcloudProvider#username}

---



