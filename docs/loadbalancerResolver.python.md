# `upcloud_loadbalancer_resolver`

Refer to the Terraform Registory for docs: [`upcloud_loadbalancer_resolver`](https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver).

# `loadbalancerResolver` Submodule <a name="`loadbalancerResolver` Submodule" id="@cdktf/provider-upcloud.loadbalancerResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerResolver <a name="LoadbalancerResolver" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver upcloud_loadbalancer_resolver}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_resolver

loadbalancerResolver.LoadbalancerResolver(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cache_invalid: typing.Union[int, float],
  cache_valid: typing.Union[int, float],
  loadbalancer: str,
  name: str,
  nameservers: typing.List[str],
  retries: typing.Union[int, float],
  timeout: typing.Union[int, float],
  timeout_retry: typing.Union[int, float],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.cacheInvalid">cache_invalid</a></code> | <code>typing.Union[int, float]</code> | Time in seconds to cache invalid results. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.cacheValid">cache_valid</a></code> | <code>typing.Union[int, float]</code> | Time in seconds to cache valid results. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.loadbalancer">loadbalancer</a></code> | <code>str</code> | ID of the load balancer to which the resolver is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the resolver must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.nameservers">nameservers</a></code> | <code>typing.List[str]</code> | List of nameserver IP addresses. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Number of retries on failure. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout for the query in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.timeoutRetry">timeout_retry</a></code> | <code>typing.Union[int, float]</code> | Timeout for the query retries in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#id LoadbalancerResolver#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cache_invalid`<sup>Required</sup> <a name="cache_invalid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.cacheInvalid"></a>

- *Type:* typing.Union[int, float]

Time in seconds to cache invalid results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#cache_invalid LoadbalancerResolver#cache_invalid}

---

##### `cache_valid`<sup>Required</sup> <a name="cache_valid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.cacheValid"></a>

- *Type:* typing.Union[int, float]

Time in seconds to cache valid results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#cache_valid LoadbalancerResolver#cache_valid}

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.loadbalancer"></a>

- *Type:* str

ID of the load balancer to which the resolver is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#loadbalancer LoadbalancerResolver#loadbalancer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.name"></a>

- *Type:* str

The name of the resolver must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#name LoadbalancerResolver#name}

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.nameservers"></a>

- *Type:* typing.List[str]

List of nameserver IP addresses.

Nameserver can reside in public internet or in customer private network.
Port is optional, if missing then default 53 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#nameservers LoadbalancerResolver#nameservers}

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Number of retries on failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#retries LoadbalancerResolver#retries}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Timeout for the query in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#timeout LoadbalancerResolver#timeout}

---

##### `timeout_retry`<sup>Required</sup> <a name="timeout_retry" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.timeoutRetry"></a>

- *Type:* typing.Union[int, float]

Timeout for the query retries in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#timeout_retry LoadbalancerResolver#timeout_retry}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#id LoadbalancerResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadbalancerResolver resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_resolver

loadbalancerResolver.LoadbalancerResolver.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_resolver

loadbalancerResolver.LoadbalancerResolver.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_resolver

loadbalancerResolver.LoadbalancerResolver.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_resolver

loadbalancerResolver.LoadbalancerResolver.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadbalancerResolver resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadbalancerResolver to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadbalancerResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalidInput">cache_invalid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValidInput">cache_valid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancerInput">loadbalancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameserversInput">nameservers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetryInput">timeout_retry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalid">cache_invalid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValid">cache_valid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancer">loadbalancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameservers">nameservers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetry">timeout_retry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cache_invalid_input`<sup>Optional</sup> <a name="cache_invalid_input" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalidInput"></a>

```python
cache_invalid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_valid_input`<sup>Optional</sup> <a name="cache_valid_input" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValidInput"></a>

```python
cache_valid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `loadbalancer_input`<sup>Optional</sup> <a name="loadbalancer_input" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancerInput"></a>

```python
loadbalancer_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nameservers_input`<sup>Optional</sup> <a name="nameservers_input" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameserversInput"></a>

```python
nameservers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_retry_input`<sup>Optional</sup> <a name="timeout_retry_input" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetryInput"></a>

```python
timeout_retry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_invalid`<sup>Required</sup> <a name="cache_invalid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalid"></a>

```python
cache_invalid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_valid`<sup>Required</sup> <a name="cache_valid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValid"></a>

```python
cache_valid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancer"></a>

```python
loadbalancer: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameservers"></a>

```python
nameservers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_retry`<sup>Required</sup> <a name="timeout_retry" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetry"></a>

```python
timeout_retry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerResolverConfig <a name="LoadbalancerResolverConfig" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_resolver

loadbalancerResolver.LoadbalancerResolverConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cache_invalid: typing.Union[int, float],
  cache_valid: typing.Union[int, float],
  loadbalancer: str,
  name: str,
  nameservers: typing.List[str],
  retries: typing.Union[int, float],
  timeout: typing.Union[int, float],
  timeout_retry: typing.Union[int, float],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheInvalid">cache_invalid</a></code> | <code>typing.Union[int, float]</code> | Time in seconds to cache invalid results. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheValid">cache_valid</a></code> | <code>typing.Union[int, float]</code> | Time in seconds to cache valid results. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.loadbalancer">loadbalancer</a></code> | <code>str</code> | ID of the load balancer to which the resolver is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.name">name</a></code> | <code>str</code> | The name of the resolver must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.nameservers">nameservers</a></code> | <code>typing.List[str]</code> | List of nameserver IP addresses. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Number of retries on failure. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout for the query in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeoutRetry">timeout_retry</a></code> | <code>typing.Union[int, float]</code> | Timeout for the query retries in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#id LoadbalancerResolver#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cache_invalid`<sup>Required</sup> <a name="cache_invalid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheInvalid"></a>

```python
cache_invalid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds to cache invalid results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#cache_invalid LoadbalancerResolver#cache_invalid}

---

##### `cache_valid`<sup>Required</sup> <a name="cache_valid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheValid"></a>

```python
cache_valid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds to cache valid results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#cache_valid LoadbalancerResolver#cache_valid}

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.loadbalancer"></a>

```python
loadbalancer: str
```

- *Type:* str

ID of the load balancer to which the resolver is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#loadbalancer LoadbalancerResolver#loadbalancer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the resolver must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#name LoadbalancerResolver#name}

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.nameservers"></a>

```python
nameservers: typing.List[str]
```

- *Type:* typing.List[str]

List of nameserver IP addresses.

Nameserver can reside in public internet or in customer private network.
Port is optional, if missing then default 53 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#nameservers LoadbalancerResolver#nameservers}

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of retries on failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#retries LoadbalancerResolver#retries}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout for the query in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#timeout LoadbalancerResolver#timeout}

---

##### `timeout_retry`<sup>Required</sup> <a name="timeout_retry" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeoutRetry"></a>

```python
timeout_retry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout for the query retries in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#timeout_retry LoadbalancerResolver#timeout_retry}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/loadbalancer_resolver#id LoadbalancerResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



