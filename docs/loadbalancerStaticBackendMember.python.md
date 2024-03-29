# `loadbalancerStaticBackendMember` Submodule <a name="`loadbalancerStaticBackendMember` Submodule" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerStaticBackendMember <a name="LoadbalancerStaticBackendMember" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member upcloud_loadbalancer_static_backend_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_static_backend_member

loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember(
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
  ip: str,
  max_sessions: typing.Union[int, float],
  name: str,
  port: typing.Union[int, float],
  weight: typing.Union[int, float],
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.backend">backend</a></code> | <code>str</code> | ID of the load balancer backend to which the member is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.ip">ip</a></code> | <code>str</code> | Server IP address in the customer private network. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.maxSessions">max_sessions</a></code> | <code>typing.Union[int, float]</code> | Maximum number of sessions before queueing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the member must be unique within the load balancer backend service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Server port. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Used to adjust the server's weight relative to other servers. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the member is enabled. Disabled members are excluded from load balancing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#id LoadbalancerStaticBackendMember#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.backend"></a>

- *Type:* str

ID of the load balancer backend to which the member is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#backend LoadbalancerStaticBackendMember#backend}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.ip"></a>

- *Type:* str

Server IP address in the customer private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#ip LoadbalancerStaticBackendMember#ip}

---

##### `max_sessions`<sup>Required</sup> <a name="max_sessions" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.maxSessions"></a>

- *Type:* typing.Union[int, float]

Maximum number of sessions before queueing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#max_sessions LoadbalancerStaticBackendMember#max_sessions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.name"></a>

- *Type:* str

The name of the member must be unique within the load balancer backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#name LoadbalancerStaticBackendMember#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Server port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#port LoadbalancerStaticBackendMember#port}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Used to adjust the server's weight relative to other servers.

All servers will receive a load proportional to their weight relative to the sum of all weights, so the higher the weight, the higher the load.
A value of 0 means the server will not participate in load balancing but will still accept persistent connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#weight LoadbalancerStaticBackendMember#weight}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the member is enabled. Disabled members are excluded from load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#enabled LoadbalancerStaticBackendMember#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#id LoadbalancerStaticBackendMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadbalancerStaticBackendMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_static_backend_member

loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_static_backend_member

loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_static_backend_member

loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_static_backend_member

loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadbalancerStaticBackendMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadbalancerStaticBackendMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadbalancerStaticBackendMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerStaticBackendMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessionsInput">max_sessions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessions">max_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `max_sessions_input`<sup>Optional</sup> <a name="max_sessions_input" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessionsInput"></a>

```python
max_sessions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `max_sessions`<sup>Required</sup> <a name="max_sessions" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.maxSessions"></a>

```python
max_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerStaticBackendMemberConfig <a name="LoadbalancerStaticBackendMemberConfig" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_static_backend_member

loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  ip: str,
  max_sessions: typing.Union[int, float],
  name: str,
  port: typing.Union[int, float],
  weight: typing.Union[int, float],
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.backend">backend</a></code> | <code>str</code> | ID of the load balancer backend to which the member is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.ip">ip</a></code> | <code>str</code> | Server IP address in the customer private network. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.maxSessions">max_sessions</a></code> | <code>typing.Union[int, float]</code> | Maximum number of sessions before queueing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.name">name</a></code> | <code>str</code> | The name of the member must be unique within the load balancer backend service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Server port. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Used to adjust the server's weight relative to other servers. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the member is enabled. Disabled members are excluded from load balancing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#id LoadbalancerStaticBackendMember#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

ID of the load balancer backend to which the member is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#backend LoadbalancerStaticBackendMember#backend}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.ip"></a>

```python
ip: str
```

- *Type:* str

Server IP address in the customer private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#ip LoadbalancerStaticBackendMember#ip}

---

##### `max_sessions`<sup>Required</sup> <a name="max_sessions" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.maxSessions"></a>

```python
max_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of sessions before queueing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#max_sessions LoadbalancerStaticBackendMember#max_sessions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the member must be unique within the load balancer backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#name LoadbalancerStaticBackendMember#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Server port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#port LoadbalancerStaticBackendMember#port}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Used to adjust the server's weight relative to other servers.

All servers will receive a load proportional to their weight relative to the sum of all weights, so the higher the weight, the higher the load.
A value of 0 means the server will not participate in load balancing but will still accept persistent connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#weight LoadbalancerStaticBackendMember#weight}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the member is enabled. Disabled members are excluded from load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#enabled LoadbalancerStaticBackendMember#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerStaticBackendMember.LoadbalancerStaticBackendMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/loadbalancer_static_backend_member#id LoadbalancerStaticBackendMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



