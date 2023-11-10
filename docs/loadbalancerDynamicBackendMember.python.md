# `upcloud_loadbalancer_dynamic_backend_member`

Refer to the Terraform Registory for docs: [`upcloud_loadbalancer_dynamic_backend_member`](https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member).

# `loadbalancerDynamicBackendMember` Submodule <a name="`loadbalancerDynamicBackendMember` Submodule" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerDynamicBackendMember <a name="LoadbalancerDynamicBackendMember" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member upcloud_loadbalancer_dynamic_backend_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_dynamic_backend_member

loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  max_sessions: typing.Union[int, float],
  name: str,
  weight: typing.Union[int, float],
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ip: str = None,
  port: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.backend">backend</a></code> | <code>str</code> | ID of the load balancer backend to which the member is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.maxSessions">max_sessions</a></code> | <code>typing.Union[int, float]</code> | Maximum number of sessions before queueing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the member must be unique within the load balancer backend service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Used to adjust the server's weight relative to other servers. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the member is enabled. Disabled members are excluded from load balancing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#id LoadbalancerDynamicBackendMember#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.ip">ip</a></code> | <code>str</code> | Optional fallback IP address in case of failure on DNS resolving. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Server port. Port is optional and can be specified in DNS SRV record. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.backend"></a>

- *Type:* str

ID of the load balancer backend to which the member is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#backend LoadbalancerDynamicBackendMember#backend}

---

##### `max_sessions`<sup>Required</sup> <a name="max_sessions" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.maxSessions"></a>

- *Type:* typing.Union[int, float]

Maximum number of sessions before queueing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#max_sessions LoadbalancerDynamicBackendMember#max_sessions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.name"></a>

- *Type:* str

The name of the member must be unique within the load balancer backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#name LoadbalancerDynamicBackendMember#name}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Used to adjust the server's weight relative to other servers.

All servers will receive a load proportional to their weight relative to the sum of all weights, so the higher the weight, the higher the load.
A value of 0 means the server will not participate in load balancing but will still accept persistent connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#weight LoadbalancerDynamicBackendMember#weight}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the member is enabled. Disabled members are excluded from load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#enabled LoadbalancerDynamicBackendMember#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#id LoadbalancerDynamicBackendMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.ip"></a>

- *Type:* str

Optional fallback IP address in case of failure on DNS resolving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#ip LoadbalancerDynamicBackendMember#ip}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Server port. Port is optional and can be specified in DNS SRV record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#port LoadbalancerDynamicBackendMember#port}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetPort">reset_port</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetPort"></a>

```python
def reset_port() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadbalancerDynamicBackendMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_dynamic_backend_member

loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_dynamic_backend_member

loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_dynamic_backend_member

loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_dynamic_backend_member

loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadbalancerDynamicBackendMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadbalancerDynamicBackendMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadbalancerDynamicBackendMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerDynamicBackendMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessionsInput">max_sessions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessions">max_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `max_sessions_input`<sup>Optional</sup> <a name="max_sessions_input" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessionsInput"></a>

```python
max_sessions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `max_sessions`<sup>Required</sup> <a name="max_sessions" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessions"></a>

```python
max_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerDynamicBackendMemberConfig <a name="LoadbalancerDynamicBackendMemberConfig" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_dynamic_backend_member

loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  max_sessions: typing.Union[int, float],
  name: str,
  weight: typing.Union[int, float],
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ip: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.backend">backend</a></code> | <code>str</code> | ID of the load balancer backend to which the member is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.maxSessions">max_sessions</a></code> | <code>typing.Union[int, float]</code> | Maximum number of sessions before queueing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.name">name</a></code> | <code>str</code> | The name of the member must be unique within the load balancer backend service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Used to adjust the server's weight relative to other servers. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the member is enabled. Disabled members are excluded from load balancing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#id LoadbalancerDynamicBackendMember#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.ip">ip</a></code> | <code>str</code> | Optional fallback IP address in case of failure on DNS resolving. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Server port. Port is optional and can be specified in DNS SRV record. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

ID of the load balancer backend to which the member is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#backend LoadbalancerDynamicBackendMember#backend}

---

##### `max_sessions`<sup>Required</sup> <a name="max_sessions" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.maxSessions"></a>

```python
max_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of sessions before queueing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#max_sessions LoadbalancerDynamicBackendMember#max_sessions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the member must be unique within the load balancer backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#name LoadbalancerDynamicBackendMember#name}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Used to adjust the server's weight relative to other servers.

All servers will receive a load proportional to their weight relative to the sum of all weights, so the higher the weight, the higher the load.
A value of 0 means the server will not participate in load balancing but will still accept persistent connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#weight LoadbalancerDynamicBackendMember#weight}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the member is enabled. Disabled members are excluded from load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#enabled LoadbalancerDynamicBackendMember#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#id LoadbalancerDynamicBackendMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.ip"></a>

```python
ip: str
```

- *Type:* str

Optional fallback IP address in case of failure on DNS resolving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#ip LoadbalancerDynamicBackendMember#ip}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Server port. Port is optional and can be specified in DNS SRV record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/loadbalancer_dynamic_backend_member#port LoadbalancerDynamicBackendMember#port}

---



