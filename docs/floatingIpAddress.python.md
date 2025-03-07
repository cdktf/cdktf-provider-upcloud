# `floatingIpAddress` Submodule <a name="`floatingIpAddress` Submodule" id="@cdktf/provider-upcloud.floatingIpAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FloatingIpAddress <a name="FloatingIpAddress" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/resources/floating_ip_address upcloud_floating_ip_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import floating_ip_address

floatingIpAddress.FloatingIpAddress(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access: str = None,
  family: str = None,
  mac_address: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.access">access</a></code> | <code>str</code> | Network access for the floating IP address. Supported value: `public`. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.family">family</a></code> | <code>str</code> | The address family of the floating IP address. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.macAddress">mac_address</a></code> | <code>str</code> | MAC address of a server interface to assign address to. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone of the address, e.g. `de-fra1`. Required when assigning a detached floating IP address. You can list available zones with `upctl zone list`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.access"></a>

- *Type:* str

Network access for the floating IP address. Supported value: `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/resources/floating_ip_address#access FloatingIpAddress#access}

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.family"></a>

- *Type:* str

The address family of the floating IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/resources/floating_ip_address#family FloatingIpAddress#family}

---

##### `mac_address`<sup>Optional</sup> <a name="mac_address" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.macAddress"></a>

- *Type:* str

MAC address of a server interface to assign address to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/resources/floating_ip_address#mac_address FloatingIpAddress#mac_address}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.zone"></a>

- *Type:* str

Zone of the address, e.g. `de-fra1`. Required when assigning a detached floating IP address. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/resources/floating_ip_address#zone FloatingIpAddress#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetFamily">reset_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetMacAddress">reset_mac_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_access` <a name="reset_access" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_family` <a name="reset_family" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetFamily"></a>

```python
def reset_family() -> None
```

##### `reset_mac_address` <a name="reset_mac_address" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetMacAddress"></a>

```python
def reset_mac_address() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FloatingIpAddress resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import floating_ip_address

floatingIpAddress.FloatingIpAddress.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import floating_ip_address

floatingIpAddress.FloatingIpAddress.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import floating_ip_address

floatingIpAddress.FloatingIpAddress.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import floating_ip_address

floatingIpAddress.FloatingIpAddress.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FloatingIpAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FloatingIpAddress to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FloatingIpAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/resources/floating_ip_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FloatingIpAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.macAddressInput">mac_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `mac_address_input`<sup>Optional</sup> <a name="mac_address_input" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.macAddressInput"></a>

```python
mac_address_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FloatingIpAddressConfig <a name="FloatingIpAddressConfig" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import floating_ip_address

floatingIpAddress.FloatingIpAddressConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access: str = None,
  family: str = None,
  mac_address: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.access">access</a></code> | <code>str</code> | Network access for the floating IP address. Supported value: `public`. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.family">family</a></code> | <code>str</code> | The address family of the floating IP address. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.macAddress">mac_address</a></code> | <code>str</code> | MAC address of a server interface to assign address to. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.zone">zone</a></code> | <code>str</code> | Zone of the address, e.g. `de-fra1`. Required when assigning a detached floating IP address. You can list available zones with `upctl zone list`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.access"></a>

```python
access: str
```

- *Type:* str

Network access for the floating IP address. Supported value: `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/resources/floating_ip_address#access FloatingIpAddress#access}

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.family"></a>

```python
family: str
```

- *Type:* str

The address family of the floating IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/resources/floating_ip_address#family FloatingIpAddress#family}

---

##### `mac_address`<sup>Optional</sup> <a name="mac_address" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

MAC address of a server interface to assign address to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/resources/floating_ip_address#mac_address FloatingIpAddress#mac_address}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone of the address, e.g. `de-fra1`. Required when assigning a detached floating IP address. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.3/docs/resources/floating_ip_address#zone FloatingIpAddress#zone}

---



