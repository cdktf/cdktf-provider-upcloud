# `gatewayConnectionTunnel` Submodule <a name="`gatewayConnectionTunnel` Submodule" id="@cdktf/provider-upcloud.gatewayConnectionTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GatewayConnectionTunnel <a name="GatewayConnectionTunnel" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel upcloud_gateway_connection_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection_tunnel

gatewayConnectionTunnel.GatewayConnectionTunnel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_id: str,
  ipsec_auth_psk: GatewayConnectionTunnelIpsecAuthPsk,
  local_address_name: str,
  name: str,
  remote_address: str,
  id: str = None,
  ipsec_properties: GatewayConnectionTunnelIpsecProperties = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | ID of the upcloud_gateway_connection resource to which the tunnel belongs. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.ipsecAuthPsk">ipsec_auth_psk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | ipsec_auth_psk block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.localAddressName">local_address_name</a></code> | <code>str</code> | Public (UpCloud) endpoint address of this tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the tunnel, should be unique within the connection. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.remoteAddress">remote_address</a></code> | <code>str</code> | Remote public IP address of the tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.ipsecProperties">ipsec_properties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | ipsec_properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.connectionId"></a>

- *Type:* str

ID of the upcloud_gateway_connection resource to which the tunnel belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#connection_id GatewayConnectionTunnel#connection_id}

---

##### `ipsec_auth_psk`<sup>Required</sup> <a name="ipsec_auth_psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.ipsecAuthPsk"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

ipsec_auth_psk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#ipsec_auth_psk GatewayConnectionTunnel#ipsec_auth_psk}

---

##### `local_address_name`<sup>Required</sup> <a name="local_address_name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.localAddressName"></a>

- *Type:* str

Public (UpCloud) endpoint address of this tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#local_address_name GatewayConnectionTunnel#local_address_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.name"></a>

- *Type:* str

The name of the tunnel, should be unique within the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#name GatewayConnectionTunnel#name}

---

##### `remote_address`<sup>Required</sup> <a name="remote_address" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.remoteAddress"></a>

- *Type:* str

Remote public IP address of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#remote_address GatewayConnectionTunnel#remote_address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipsec_properties`<sup>Optional</sup> <a name="ipsec_properties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.ipsecProperties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

ipsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#ipsec_properties GatewayConnectionTunnel#ipsec_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk">put_ipsec_auth_psk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties">put_ipsec_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetIpsecProperties">reset_ipsec_properties</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ipsec_auth_psk` <a name="put_ipsec_auth_psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk"></a>

```python
def put_ipsec_auth_psk(
  psk: str
) -> None
```

###### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk.parameter.psk"></a>

- *Type:* str

The pre-shared key.

This value is only used during resource creation and is not returned in the state. It is not possible to update this value. If you need to update it, delete the connection and create a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#psk GatewayConnectionTunnel#psk}

---

##### `put_ipsec_properties` <a name="put_ipsec_properties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties"></a>

```python
def put_ipsec_properties(
  child_rekey_time: typing.Union[int, float] = None,
  dpd_delay: typing.Union[int, float] = None,
  dpd_timeout: typing.Union[int, float] = None,
  ike_lifetime: typing.Union[int, float] = None,
  phase1_algorithms: typing.List[str] = None,
  phase1_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  phase1_integrity_algorithms: typing.List[str] = None,
  phase2_algorithms: typing.List[str] = None,
  phase2_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  phase2_integrity_algorithms: typing.List[str] = None,
  rekey_time: typing.Union[int, float] = None
) -> None
```

###### `child_rekey_time`<sup>Optional</sup> <a name="child_rekey_time" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.childRekeyTime"></a>

- *Type:* typing.Union[int, float]

IKE child SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#child_rekey_time GatewayConnectionTunnel#child_rekey_time}

---

###### `dpd_delay`<sup>Optional</sup> <a name="dpd_delay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.dpdDelay"></a>

- *Type:* typing.Union[int, float]

Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#dpd_delay GatewayConnectionTunnel#dpd_delay}

---

###### `dpd_timeout`<sup>Optional</sup> <a name="dpd_timeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.dpdTimeout"></a>

- *Type:* typing.Union[int, float]

Timeout period for DPD reply before considering the peer to be dead, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#dpd_timeout GatewayConnectionTunnel#dpd_timeout}

---

###### `ike_lifetime`<sup>Optional</sup> <a name="ike_lifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.ikeLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum IKE SA lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#ike_lifetime GatewayConnectionTunnel#ike_lifetime}

---

###### `phase1_algorithms`<sup>Optional</sup> <a name="phase1_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.phase1Algorithms"></a>

- *Type:* typing.List[str]

List of Phase 1: Proposal algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase1_algorithms GatewayConnectionTunnel#phase1_algorithms}

---

###### `phase1_dh_group_numbers`<sup>Optional</sup> <a name="phase1_dh_group_numbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.phase1DhGroupNumbers"></a>

- *Type:* typing.List[typing.Union[int, float]]

List of Phase 1 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase1_dh_group_numbers GatewayConnectionTunnel#phase1_dh_group_numbers}

---

###### `phase1_integrity_algorithms`<sup>Optional</sup> <a name="phase1_integrity_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.phase1IntegrityAlgorithms"></a>

- *Type:* typing.List[str]

List of Phase 1 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase1_integrity_algorithms GatewayConnectionTunnel#phase1_integrity_algorithms}

---

###### `phase2_algorithms`<sup>Optional</sup> <a name="phase2_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.phase2Algorithms"></a>

- *Type:* typing.List[str]

List of Phase 2: Security Association algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase2_algorithms GatewayConnectionTunnel#phase2_algorithms}

---

###### `phase2_dh_group_numbers`<sup>Optional</sup> <a name="phase2_dh_group_numbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.phase2DhGroupNumbers"></a>

- *Type:* typing.List[typing.Union[int, float]]

List of Phase 2 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase2_dh_group_numbers GatewayConnectionTunnel#phase2_dh_group_numbers}

---

###### `phase2_integrity_algorithms`<sup>Optional</sup> <a name="phase2_integrity_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.phase2IntegrityAlgorithms"></a>

- *Type:* typing.List[str]

List of Phase 2 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase2_integrity_algorithms GatewayConnectionTunnel#phase2_integrity_algorithms}

---

###### `rekey_time`<sup>Optional</sup> <a name="rekey_time" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.rekeyTime"></a>

- *Type:* typing.Union[int, float]

IKE SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#rekey_time GatewayConnectionTunnel#rekey_time}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipsec_properties` <a name="reset_ipsec_properties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetIpsecProperties"></a>

```python
def reset_ipsec_properties() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GatewayConnectionTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection_tunnel

gatewayConnectionTunnel.GatewayConnectionTunnel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection_tunnel

gatewayConnectionTunnel.GatewayConnectionTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection_tunnel

gatewayConnectionTunnel.GatewayConnectionTunnel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection_tunnel

gatewayConnectionTunnel.GatewayConnectionTunnel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GatewayConnectionTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GatewayConnectionTunnel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GatewayConnectionTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GatewayConnectionTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPsk">ipsec_auth_psk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference">GatewayConnectionTunnelIpsecAuthPskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecProperties">ipsec_properties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference">GatewayConnectionTunnelIpsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.operationalState">operational_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPskInput">ipsec_auth_psk_input</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecPropertiesInput">ipsec_properties_input</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressNameInput">local_address_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddressInput">remote_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressName">local_address_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddress">remote_address</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipsec_auth_psk`<sup>Required</sup> <a name="ipsec_auth_psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPsk"></a>

```python
ipsec_auth_psk: GatewayConnectionTunnelIpsecAuthPskOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference">GatewayConnectionTunnelIpsecAuthPskOutputReference</a>

---

##### `ipsec_properties`<sup>Required</sup> <a name="ipsec_properties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecProperties"></a>

```python
ipsec_properties: GatewayConnectionTunnelIpsecPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference">GatewayConnectionTunnelIpsecPropertiesOutputReference</a>

---

##### `operational_state`<sup>Required</sup> <a name="operational_state" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.operationalState"></a>

```python
operational_state: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipsec_auth_psk_input`<sup>Optional</sup> <a name="ipsec_auth_psk_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPskInput"></a>

```python
ipsec_auth_psk_input: GatewayConnectionTunnelIpsecAuthPsk
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---

##### `ipsec_properties_input`<sup>Optional</sup> <a name="ipsec_properties_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecPropertiesInput"></a>

```python
ipsec_properties_input: GatewayConnectionTunnelIpsecProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---

##### `local_address_name_input`<sup>Optional</sup> <a name="local_address_name_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressNameInput"></a>

```python
local_address_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remote_address_input`<sup>Optional</sup> <a name="remote_address_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddressInput"></a>

```python
remote_address_input: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_address_name`<sup>Required</sup> <a name="local_address_name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressName"></a>

```python
local_address_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_address`<sup>Required</sup> <a name="remote_address" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddress"></a>

```python
remote_address: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GatewayConnectionTunnelConfig <a name="GatewayConnectionTunnelConfig" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection_tunnel

gatewayConnectionTunnel.GatewayConnectionTunnelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_id: str,
  ipsec_auth_psk: GatewayConnectionTunnelIpsecAuthPsk,
  local_address_name: str,
  name: str,
  remote_address: str,
  id: str = None,
  ipsec_properties: GatewayConnectionTunnelIpsecProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connectionId">connection_id</a></code> | <code>str</code> | ID of the upcloud_gateway_connection resource to which the tunnel belongs. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecAuthPsk">ipsec_auth_psk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | ipsec_auth_psk block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.localAddressName">local_address_name</a></code> | <code>str</code> | Public (UpCloud) endpoint address of this tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.name">name</a></code> | <code>str</code> | The name of the tunnel, should be unique within the connection. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.remoteAddress">remote_address</a></code> | <code>str</code> | Remote public IP address of the tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecProperties">ipsec_properties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | ipsec_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

ID of the upcloud_gateway_connection resource to which the tunnel belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#connection_id GatewayConnectionTunnel#connection_id}

---

##### `ipsec_auth_psk`<sup>Required</sup> <a name="ipsec_auth_psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecAuthPsk"></a>

```python
ipsec_auth_psk: GatewayConnectionTunnelIpsecAuthPsk
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

ipsec_auth_psk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#ipsec_auth_psk GatewayConnectionTunnel#ipsec_auth_psk}

---

##### `local_address_name`<sup>Required</sup> <a name="local_address_name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.localAddressName"></a>

```python
local_address_name: str
```

- *Type:* str

Public (UpCloud) endpoint address of this tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#local_address_name GatewayConnectionTunnel#local_address_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the tunnel, should be unique within the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#name GatewayConnectionTunnel#name}

---

##### `remote_address`<sup>Required</sup> <a name="remote_address" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.remoteAddress"></a>

```python
remote_address: str
```

- *Type:* str

Remote public IP address of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#remote_address GatewayConnectionTunnel#remote_address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipsec_properties`<sup>Optional</sup> <a name="ipsec_properties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecProperties"></a>

```python
ipsec_properties: GatewayConnectionTunnelIpsecProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

ipsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#ipsec_properties GatewayConnectionTunnel#ipsec_properties}

---

### GatewayConnectionTunnelIpsecAuthPsk <a name="GatewayConnectionTunnelIpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection_tunnel

gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk(
  psk: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.property.psk">psk</a></code> | <code>str</code> | The pre-shared key. |

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.property.psk"></a>

```python
psk: str
```

- *Type:* str

The pre-shared key.

This value is only used during resource creation and is not returned in the state. It is not possible to update this value. If you need to update it, delete the connection and create a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#psk GatewayConnectionTunnel#psk}

---

### GatewayConnectionTunnelIpsecProperties <a name="GatewayConnectionTunnelIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection_tunnel

gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties(
  child_rekey_time: typing.Union[int, float] = None,
  dpd_delay: typing.Union[int, float] = None,
  dpd_timeout: typing.Union[int, float] = None,
  ike_lifetime: typing.Union[int, float] = None,
  phase1_algorithms: typing.List[str] = None,
  phase1_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  phase1_integrity_algorithms: typing.List[str] = None,
  phase2_algorithms: typing.List[str] = None,
  phase2_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  phase2_integrity_algorithms: typing.List[str] = None,
  rekey_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.childRekeyTime">child_rekey_time</a></code> | <code>typing.Union[int, float]</code> | IKE child SA rekey time in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdDelay">dpd_delay</a></code> | <code>typing.Union[int, float]</code> | Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdTimeout">dpd_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout period for DPD reply before considering the peer to be dead, in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.ikeLifetime">ike_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum IKE SA lifetime in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1Algorithms">phase1_algorithms</a></code> | <code>typing.List[str]</code> | List of Phase 1: Proposal algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1DhGroupNumbers">phase1_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of Phase 1 Diffie-Hellman group numbers. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1IntegrityAlgorithms">phase1_integrity_algorithms</a></code> | <code>typing.List[str]</code> | List of Phase 1 integrity algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2Algorithms">phase2_algorithms</a></code> | <code>typing.List[str]</code> | List of Phase 2: Security Association algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2DhGroupNumbers">phase2_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of Phase 2 Diffie-Hellman group numbers. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2IntegrityAlgorithms">phase2_integrity_algorithms</a></code> | <code>typing.List[str]</code> | List of Phase 2 integrity algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.rekeyTime">rekey_time</a></code> | <code>typing.Union[int, float]</code> | IKE SA rekey time in seconds. |

---

##### `child_rekey_time`<sup>Optional</sup> <a name="child_rekey_time" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.childRekeyTime"></a>

```python
child_rekey_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

IKE child SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#child_rekey_time GatewayConnectionTunnel#child_rekey_time}

---

##### `dpd_delay`<sup>Optional</sup> <a name="dpd_delay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdDelay"></a>

```python
dpd_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#dpd_delay GatewayConnectionTunnel#dpd_delay}

---

##### `dpd_timeout`<sup>Optional</sup> <a name="dpd_timeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdTimeout"></a>

```python
dpd_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout period for DPD reply before considering the peer to be dead, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#dpd_timeout GatewayConnectionTunnel#dpd_timeout}

---

##### `ike_lifetime`<sup>Optional</sup> <a name="ike_lifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.ikeLifetime"></a>

```python
ike_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum IKE SA lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#ike_lifetime GatewayConnectionTunnel#ike_lifetime}

---

##### `phase1_algorithms`<sup>Optional</sup> <a name="phase1_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1Algorithms"></a>

```python
phase1_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

List of Phase 1: Proposal algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase1_algorithms GatewayConnectionTunnel#phase1_algorithms}

---

##### `phase1_dh_group_numbers`<sup>Optional</sup> <a name="phase1_dh_group_numbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1DhGroupNumbers"></a>

```python
phase1_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

List of Phase 1 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase1_dh_group_numbers GatewayConnectionTunnel#phase1_dh_group_numbers}

---

##### `phase1_integrity_algorithms`<sup>Optional</sup> <a name="phase1_integrity_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1IntegrityAlgorithms"></a>

```python
phase1_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

List of Phase 1 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase1_integrity_algorithms GatewayConnectionTunnel#phase1_integrity_algorithms}

---

##### `phase2_algorithms`<sup>Optional</sup> <a name="phase2_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2Algorithms"></a>

```python
phase2_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

List of Phase 2: Security Association algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase2_algorithms GatewayConnectionTunnel#phase2_algorithms}

---

##### `phase2_dh_group_numbers`<sup>Optional</sup> <a name="phase2_dh_group_numbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2DhGroupNumbers"></a>

```python
phase2_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

List of Phase 2 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase2_dh_group_numbers GatewayConnectionTunnel#phase2_dh_group_numbers}

---

##### `phase2_integrity_algorithms`<sup>Optional</sup> <a name="phase2_integrity_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2IntegrityAlgorithms"></a>

```python
phase2_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

List of Phase 2 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#phase2_integrity_algorithms GatewayConnectionTunnel#phase2_integrity_algorithms}

---

##### `rekey_time`<sup>Optional</sup> <a name="rekey_time" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.rekeyTime"></a>

```python
rekey_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

IKE SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection_tunnel#rekey_time GatewayConnectionTunnel#rekey_time}

---

## Classes <a name="Classes" id="Classes"></a>

### GatewayConnectionTunnelIpsecAuthPskOutputReference <a name="GatewayConnectionTunnelIpsecAuthPskOutputReference" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection_tunnel

gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.pskInput">psk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.psk">psk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `psk_input`<sup>Optional</sup> <a name="psk_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.pskInput"></a>

```python
psk_input: str
```

- *Type:* str

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.psk"></a>

```python
psk: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.internalValue"></a>

```python
internal_value: GatewayConnectionTunnelIpsecAuthPsk
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---


### GatewayConnectionTunnelIpsecPropertiesOutputReference <a name="GatewayConnectionTunnelIpsecPropertiesOutputReference" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway_connection_tunnel

gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetChildRekeyTime">reset_child_rekey_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdDelay">reset_dpd_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdTimeout">reset_dpd_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetIkeLifetime">reset_ike_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1Algorithms">reset_phase1_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1DhGroupNumbers">reset_phase1_dh_group_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1IntegrityAlgorithms">reset_phase1_integrity_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2Algorithms">reset_phase2_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2DhGroupNumbers">reset_phase2_dh_group_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2IntegrityAlgorithms">reset_phase2_integrity_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetRekeyTime">reset_rekey_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_child_rekey_time` <a name="reset_child_rekey_time" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetChildRekeyTime"></a>

```python
def reset_child_rekey_time() -> None
```

##### `reset_dpd_delay` <a name="reset_dpd_delay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdDelay"></a>

```python
def reset_dpd_delay() -> None
```

##### `reset_dpd_timeout` <a name="reset_dpd_timeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdTimeout"></a>

```python
def reset_dpd_timeout() -> None
```

##### `reset_ike_lifetime` <a name="reset_ike_lifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetIkeLifetime"></a>

```python
def reset_ike_lifetime() -> None
```

##### `reset_phase1_algorithms` <a name="reset_phase1_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1Algorithms"></a>

```python
def reset_phase1_algorithms() -> None
```

##### `reset_phase1_dh_group_numbers` <a name="reset_phase1_dh_group_numbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1DhGroupNumbers"></a>

```python
def reset_phase1_dh_group_numbers() -> None
```

##### `reset_phase1_integrity_algorithms` <a name="reset_phase1_integrity_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1IntegrityAlgorithms"></a>

```python
def reset_phase1_integrity_algorithms() -> None
```

##### `reset_phase2_algorithms` <a name="reset_phase2_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2Algorithms"></a>

```python
def reset_phase2_algorithms() -> None
```

##### `reset_phase2_dh_group_numbers` <a name="reset_phase2_dh_group_numbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2DhGroupNumbers"></a>

```python
def reset_phase2_dh_group_numbers() -> None
```

##### `reset_phase2_integrity_algorithms` <a name="reset_phase2_integrity_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2IntegrityAlgorithms"></a>

```python
def reset_phase2_integrity_algorithms() -> None
```

##### `reset_rekey_time` <a name="reset_rekey_time" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetRekeyTime"></a>

```python
def reset_rekey_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTimeInput">child_rekey_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelayInput">dpd_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeoutInput">dpd_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetimeInput">ike_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1AlgorithmsInput">phase1_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbersInput">phase1_dh_group_numbers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithmsInput">phase1_integrity_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2AlgorithmsInput">phase2_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbersInput">phase2_dh_group_numbers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithmsInput">phase2_integrity_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTimeInput">rekey_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTime">child_rekey_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelay">dpd_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeout">dpd_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetime">ike_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1Algorithms">phase1_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbers">phase1_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithms">phase1_integrity_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2Algorithms">phase2_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbers">phase2_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithms">phase2_integrity_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTime">rekey_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `child_rekey_time_input`<sup>Optional</sup> <a name="child_rekey_time_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTimeInput"></a>

```python
child_rekey_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dpd_delay_input`<sup>Optional</sup> <a name="dpd_delay_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelayInput"></a>

```python
dpd_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dpd_timeout_input`<sup>Optional</sup> <a name="dpd_timeout_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeoutInput"></a>

```python
dpd_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ike_lifetime_input`<sup>Optional</sup> <a name="ike_lifetime_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetimeInput"></a>

```python
ike_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `phase1_algorithms_input`<sup>Optional</sup> <a name="phase1_algorithms_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1AlgorithmsInput"></a>

```python
phase1_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase1_dh_group_numbers_input`<sup>Optional</sup> <a name="phase1_dh_group_numbers_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbersInput"></a>

```python
phase1_dh_group_numbers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `phase1_integrity_algorithms_input`<sup>Optional</sup> <a name="phase1_integrity_algorithms_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithmsInput"></a>

```python
phase1_integrity_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase2_algorithms_input`<sup>Optional</sup> <a name="phase2_algorithms_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2AlgorithmsInput"></a>

```python
phase2_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase2_dh_group_numbers_input`<sup>Optional</sup> <a name="phase2_dh_group_numbers_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbersInput"></a>

```python
phase2_dh_group_numbers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `phase2_integrity_algorithms_input`<sup>Optional</sup> <a name="phase2_integrity_algorithms_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithmsInput"></a>

```python
phase2_integrity_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rekey_time_input`<sup>Optional</sup> <a name="rekey_time_input" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTimeInput"></a>

```python
rekey_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `child_rekey_time`<sup>Required</sup> <a name="child_rekey_time" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTime"></a>

```python
child_rekey_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dpd_delay`<sup>Required</sup> <a name="dpd_delay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelay"></a>

```python
dpd_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dpd_timeout`<sup>Required</sup> <a name="dpd_timeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeout"></a>

```python
dpd_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ike_lifetime`<sup>Required</sup> <a name="ike_lifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetime"></a>

```python
ike_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `phase1_algorithms`<sup>Required</sup> <a name="phase1_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1Algorithms"></a>

```python
phase1_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase1_dh_group_numbers`<sup>Required</sup> <a name="phase1_dh_group_numbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbers"></a>

```python
phase1_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `phase1_integrity_algorithms`<sup>Required</sup> <a name="phase1_integrity_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithms"></a>

```python
phase1_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase2_algorithms`<sup>Required</sup> <a name="phase2_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2Algorithms"></a>

```python
phase2_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase2_dh_group_numbers`<sup>Required</sup> <a name="phase2_dh_group_numbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbers"></a>

```python
phase2_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `phase2_integrity_algorithms`<sup>Required</sup> <a name="phase2_integrity_algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithms"></a>

```python
phase2_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rekey_time`<sup>Required</sup> <a name="rekey_time" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTime"></a>

```python
rekey_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GatewayConnectionTunnelIpsecProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---



