# `gatewayConnection` Submodule <a name="`gatewayConnection` Submodule" id="@cdktf/provider-upcloud.gatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GatewayConnection <a name="GatewayConnection" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection upcloud_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway: str,
  name: str,
  id: str = None,
  local_route: typing.Union[IResolvable, typing.List[GatewayConnectionLocalRoute]] = None,
  remote_route: typing.Union[IResolvable, typing.List[GatewayConnectionRemoteRoute]] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.gateway">gateway</a></code> | <code>str</code> | The ID of the upcloud_gateway resource to which the connection belongs. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the connection, should be unique within the gateway. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#id GatewayConnection#id}. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.localRoute">local_route</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>]]</code> | local_route block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.remoteRoute">remote_route</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>]]</code> | remote_route block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the connection; currently the only supported type is 'ipsec'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.gateway"></a>

- *Type:* str

The ID of the upcloud_gateway resource to which the connection belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#gateway GatewayConnection#gateway}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.name"></a>

- *Type:* str

The name of the connection, should be unique within the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#name GatewayConnection#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#id GatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_route`<sup>Optional</sup> <a name="local_route" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.localRoute"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>]]

local_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#local_route GatewayConnection#local_route}

---

##### `remote_route`<sup>Optional</sup> <a name="remote_route" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.remoteRoute"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>]]

remote_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#remote_route GatewayConnection#remote_route}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.type"></a>

- *Type:* str

The type of the connection; currently the only supported type is 'ipsec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#type GatewayConnection#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putLocalRoute">put_local_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putRemoteRoute">put_remote_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetLocalRoute">reset_local_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetRemoteRoute">reset_remote_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_local_route` <a name="put_local_route" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putLocalRoute"></a>

```python
def put_local_route(
  value: typing.Union[IResolvable, typing.List[GatewayConnectionLocalRoute]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putLocalRoute.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>]]

---

##### `put_remote_route` <a name="put_remote_route" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putRemoteRoute"></a>

```python
def put_remote_route(
  value: typing.Union[IResolvable, typing.List[GatewayConnectionRemoteRoute]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putRemoteRoute.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local_route` <a name="reset_local_route" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetLocalRoute"></a>

```python
def reset_local_route() -> None
```

##### `reset_remote_route` <a name="reset_remote_route" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetRemoteRoute"></a>

```python
def reset_remote_route() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GatewayConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GatewayConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GatewayConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GatewayConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GatewayConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.localRoute">local_route</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList">GatewayConnectionLocalRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.remoteRoute">remote_route</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList">GatewayConnectionRemoteRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.tunnels">tunnels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.gatewayInput">gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.localRouteInput">local_route_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.remoteRouteInput">remote_route_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `local_route`<sup>Required</sup> <a name="local_route" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.localRoute"></a>

```python
local_route: GatewayConnectionLocalRouteList
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList">GatewayConnectionLocalRouteList</a>

---

##### `remote_route`<sup>Required</sup> <a name="remote_route" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.remoteRoute"></a>

```python
remote_route: GatewayConnectionRemoteRouteList
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList">GatewayConnectionRemoteRouteList</a>

---

##### `tunnels`<sup>Required</sup> <a name="tunnels" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.tunnels"></a>

```python
tunnels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.gatewayInput"></a>

```python
gateway_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_route_input`<sup>Optional</sup> <a name="local_route_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.localRouteInput"></a>

```python
local_route_input: typing.Union[IResolvable, typing.List[GatewayConnectionLocalRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remote_route_input`<sup>Optional</sup> <a name="remote_route_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.remoteRouteInput"></a>

```python
remote_route_input: typing.Union[IResolvable, typing.List[GatewayConnectionRemoteRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GatewayConnectionConfig <a name="GatewayConnectionConfig" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway: str,
  name: str,
  id: str = None,
  local_route: typing.Union[IResolvable, typing.List[GatewayConnectionLocalRoute]] = None,
  remote_route: typing.Union[IResolvable, typing.List[GatewayConnectionRemoteRoute]] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.gateway">gateway</a></code> | <code>str</code> | The ID of the upcloud_gateway resource to which the connection belongs. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.name">name</a></code> | <code>str</code> | The name of the connection, should be unique within the gateway. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#id GatewayConnection#id}. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.localRoute">local_route</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>]]</code> | local_route block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.remoteRoute">remote_route</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>]]</code> | remote_route block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.type">type</a></code> | <code>str</code> | The type of the connection; currently the only supported type is 'ipsec'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

The ID of the upcloud_gateway resource to which the connection belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#gateway GatewayConnection#gateway}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the connection, should be unique within the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#name GatewayConnection#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#id GatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_route`<sup>Optional</sup> <a name="local_route" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.localRoute"></a>

```python
local_route: typing.Union[IResolvable, typing.List[GatewayConnectionLocalRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>]]

local_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#local_route GatewayConnection#local_route}

---

##### `remote_route`<sup>Optional</sup> <a name="remote_route" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.remoteRoute"></a>

```python
remote_route: typing.Union[IResolvable, typing.List[GatewayConnectionRemoteRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>]]

remote_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#remote_route GatewayConnection#remote_route}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the connection; currently the only supported type is 'ipsec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#type GatewayConnection#type}

---

### GatewayConnectionLocalRoute <a name="GatewayConnectionLocalRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnectionLocalRoute(
  name: str,
  static_network: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.name">name</a></code> | <code>str</code> | Name of the route. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.staticNetwork">static_network</a></code> | <code>str</code> | Destination prefix of the route; needs to be a valid IPv4 prefix. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.type">type</a></code> | <code>str</code> | Type of route; currently the only supported type is 'static'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#name GatewayConnection#name}

---

##### `static_network`<sup>Required</sup> <a name="static_network" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.staticNetwork"></a>

```python
static_network: str
```

- *Type:* str

Destination prefix of the route; needs to be a valid IPv4 prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#static_network GatewayConnection#static_network}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.type"></a>

```python
type: str
```

- *Type:* str

Type of route; currently the only supported type is 'static'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#type GatewayConnection#type}

---

### GatewayConnectionRemoteRoute <a name="GatewayConnectionRemoteRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnectionRemoteRoute(
  name: str,
  static_network: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.name">name</a></code> | <code>str</code> | Name of the route. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.staticNetwork">static_network</a></code> | <code>str</code> | Destination prefix of the route; needs to be a valid IPv4 prefix. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.type">type</a></code> | <code>str</code> | Type of route; currently the only supported type is 'static'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#name GatewayConnection#name}

---

##### `static_network`<sup>Required</sup> <a name="static_network" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.staticNetwork"></a>

```python
static_network: str
```

- *Type:* str

Destination prefix of the route; needs to be a valid IPv4 prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#static_network GatewayConnection#static_network}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.type"></a>

```python
type: str
```

- *Type:* str

Type of route; currently the only supported type is 'static'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/gateway_connection#type GatewayConnection#type}

---

## Classes <a name="Classes" id="Classes"></a>

### GatewayConnectionLocalRouteList <a name="GatewayConnectionLocalRouteList" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnectionLocalRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GatewayConnectionLocalRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GatewayConnectionLocalRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>]]

---


### GatewayConnectionLocalRouteOutputReference <a name="GatewayConnectionLocalRouteOutputReference" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnectionLocalRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.staticNetworkInput">static_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.staticNetwork">static_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `static_network_input`<sup>Optional</sup> <a name="static_network_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.staticNetworkInput"></a>

```python
static_network_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `static_network`<sup>Required</sup> <a name="static_network" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.staticNetwork"></a>

```python
static_network: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GatewayConnectionLocalRoute]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>]

---


### GatewayConnectionRemoteRouteList <a name="GatewayConnectionRemoteRouteList" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnectionRemoteRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GatewayConnectionRemoteRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GatewayConnectionRemoteRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>]]

---


### GatewayConnectionRemoteRouteOutputReference <a name="GatewayConnectionRemoteRouteOutputReference" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection

gatewayConnection.GatewayConnectionRemoteRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.staticNetworkInput">static_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.staticNetwork">static_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `static_network_input`<sup>Optional</sup> <a name="static_network_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.staticNetworkInput"></a>

```python
static_network_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `static_network`<sup>Required</sup> <a name="static_network" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.staticNetwork"></a>

```python
static_network: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GatewayConnectionRemoteRoute]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>]

---



