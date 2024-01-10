# `managedDatabaseOpensearch` Submodule <a name="`managedDatabaseOpensearch` Submodule" id="@cdktf/provider-upcloud.managedDatabaseOpensearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseOpensearch <a name="ManagedDatabaseOpensearch" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch upcloud_managed_database_opensearch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearch(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  plan: str,
  zone: str,
  access_control: typing.Union[bool, IResolvable] = None,
  extended_access_control: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintenance_window_dow: str = None,
  maintenance_window_time: str = None,
  powered: typing.Union[bool, IResolvable] = None,
  properties: ManagedDatabaseOpensearchProperties = None,
  title: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.plan">plan</a></code> | <code>str</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.accessControl">access_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables users access control for OpenSearch service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.extendedAccessControl">extended_access_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.powered">powered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.title">title</a></code> | <code>str</code> | Title of a managed database instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.name"></a>

- *Type:* str

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.plan"></a>

- *Type:* str

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#plan ManagedDatabaseOpensearch#plan}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.zone"></a>

- *Type:* str

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#zone ManagedDatabaseOpensearch#zone}

---

##### `access_control`<sup>Optional</sup> <a name="access_control" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.accessControl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables users access control for OpenSearch service.

User access control rules will only be enforced if this attribute is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#access_control ManagedDatabaseOpensearch#access_control}

---

##### `extended_access_control`<sup>Optional</sup> <a name="extended_access_control" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.extendedAccessControl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs.

Users are limited to perform operations on indices based on the user-specific access control rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#extended_access_control ManagedDatabaseOpensearch#extended_access_control}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window_dow`<sup>Optional</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.maintenanceWindowDow"></a>

- *Type:* str

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#maintenance_window_dow ManagedDatabaseOpensearch#maintenance_window_dow}

---

##### `maintenance_window_time`<sup>Optional</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.maintenanceWindowTime"></a>

- *Type:* str

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#maintenance_window_time ManagedDatabaseOpensearch#maintenance_window_time}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.powered"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#powered ManagedDatabaseOpensearch#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#properties ManagedDatabaseOpensearch#properties}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.title"></a>

- *Type:* str

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#title ManagedDatabaseOpensearch#title}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetAccessControl">reset_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetExtendedAccessControl">reset_extended_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowDow">reset_maintenance_window_dow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowTime">reset_maintenance_window_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetPowered">reset_powered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetTitle">reset_title</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties"></a>

```python
def put_properties(
  automatic_utility_network_ip_filter: typing.Union[bool, IResolvable] = None,
  ip_filter: typing.List[str] = None,
  migration: ManagedDatabaseOpensearchPropertiesMigration = None,
  public_access: typing.Union[bool, IResolvable] = None,
  version: str = None
) -> None
```

###### `automatic_utility_network_ip_filter`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties.parameter.automaticUtilityNetworkIpFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatic utility network IP Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#automatic_utility_network_ip_filter ManagedDatabaseOpensearch#automatic_utility_network_ip_filter}

---

###### `ip_filter`<sup>Optional</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties.parameter.ipFilter"></a>

- *Type:* typing.List[str]

IP filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#ip_filter ManagedDatabaseOpensearch#ip_filter}

---

###### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties.parameter.migration"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration">ManagedDatabaseOpensearchPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#migration ManagedDatabaseOpensearch#migration}

---

###### `public_access`<sup>Optional</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties.parameter.publicAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Public access allows connections to your Managed Database services via the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#public_access ManagedDatabaseOpensearch#public_access}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties.parameter.version"></a>

- *Type:* str

OpenSearch major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#version ManagedDatabaseOpensearch#version}

---

##### `reset_access_control` <a name="reset_access_control" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetAccessControl"></a>

```python
def reset_access_control() -> None
```

##### `reset_extended_access_control` <a name="reset_extended_access_control" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetExtendedAccessControl"></a>

```python
def reset_extended_access_control() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window_dow` <a name="reset_maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowDow"></a>

```python
def reset_maintenance_window_dow() -> None
```

##### `reset_maintenance_window_time` <a name="reset_maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowTime"></a>

```python
def reset_maintenance_window_time() -> None
```

##### `reset_powered` <a name="reset_powered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetPowered"></a>

```python
def reset_powered() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetTitle"></a>

```python
def reset_title() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagedDatabaseOpensearch resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagedDatabaseOpensearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedDatabaseOpensearch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedDatabaseOpensearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseOpensearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.components">components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList">ManagedDatabaseOpensearchComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nodeStates">node_states</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList">ManagedDatabaseOpensearchNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.primaryDatabase">primary_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference">ManagedDatabaseOpensearchPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceHost">service_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePassword">service_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePort">service_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUri">service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUsername">service_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControlInput">access_control_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControlInput">extended_access_control_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDowInput">maintenance_window_dow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTimeInput">maintenance_window_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.poweredInput">powered_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControl">access_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControl">extended_access_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.powered">powered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.components"></a>

```python
components: ManagedDatabaseOpensearchComponentsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList">ManagedDatabaseOpensearchComponentsList</a>

---

##### `node_states`<sup>Required</sup> <a name="node_states" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nodeStates"></a>

```python
node_states: ManagedDatabaseOpensearchNodeStatesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList">ManagedDatabaseOpensearchNodeStatesList</a>

---

##### `primary_database`<sup>Required</sup> <a name="primary_database" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.primaryDatabase"></a>

```python
primary_database: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.properties"></a>

```python
properties: ManagedDatabaseOpensearchPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference">ManagedDatabaseOpensearchPropertiesOutputReference</a>

---

##### `service_host`<sup>Required</sup> <a name="service_host" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceHost"></a>

```python
service_host: str
```

- *Type:* str

---

##### `service_password`<sup>Required</sup> <a name="service_password" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePassword"></a>

```python
service_password: str
```

- *Type:* str

---

##### `service_port`<sup>Required</sup> <a name="service_port" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePort"></a>

```python
service_port: str
```

- *Type:* str

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

---

##### `service_username`<sup>Required</sup> <a name="service_username" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUsername"></a>

```python
service_username: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `access_control_input`<sup>Optional</sup> <a name="access_control_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControlInput"></a>

```python
access_control_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extended_access_control_input`<sup>Optional</sup> <a name="extended_access_control_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControlInput"></a>

```python
extended_access_control_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_window_dow_input`<sup>Optional</sup> <a name="maintenance_window_dow_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDowInput"></a>

```python
maintenance_window_dow_input: str
```

- *Type:* str

---

##### `maintenance_window_time_input`<sup>Optional</sup> <a name="maintenance_window_time_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTimeInput"></a>

```python
maintenance_window_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `powered_input`<sup>Optional</sup> <a name="powered_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.poweredInput"></a>

```python
powered_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.propertiesInput"></a>

```python
properties_input: ManagedDatabaseOpensearchProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `access_control`<sup>Required</sup> <a name="access_control" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControl"></a>

```python
access_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extended_access_control`<sup>Required</sup> <a name="extended_access_control" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControl"></a>

```python
extended_access_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_window_dow`<sup>Required</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDow"></a>

```python
maintenance_window_dow: str
```

- *Type:* str

---

##### `maintenance_window_time`<sup>Required</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTime"></a>

```python
maintenance_window_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `powered`<sup>Required</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.powered"></a>

```python
powered: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseOpensearchComponents <a name="ManagedDatabaseOpensearchComponents" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents()
```


### ManagedDatabaseOpensearchConfig <a name="ManagedDatabaseOpensearchConfig" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  plan: str,
  zone: str,
  access_control: typing.Union[bool, IResolvable] = None,
  extended_access_control: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintenance_window_dow: str = None,
  maintenance_window_time: str = None,
  powered: typing.Union[bool, IResolvable] = None,
  properties: ManagedDatabaseOpensearchProperties = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.name">name</a></code> | <code>str</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.plan">plan</a></code> | <code>str</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.zone">zone</a></code> | <code>str</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.accessControl">access_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables users access control for OpenSearch service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.extendedAccessControl">extended_access_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.powered">powered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.title">title</a></code> | <code>str</code> | Title of a managed database instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.plan"></a>

```python
plan: str
```

- *Type:* str

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#plan ManagedDatabaseOpensearch#plan}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#zone ManagedDatabaseOpensearch#zone}

---

##### `access_control`<sup>Optional</sup> <a name="access_control" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.accessControl"></a>

```python
access_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables users access control for OpenSearch service.

User access control rules will only be enforced if this attribute is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#access_control ManagedDatabaseOpensearch#access_control}

---

##### `extended_access_control`<sup>Optional</sup> <a name="extended_access_control" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.extendedAccessControl"></a>

```python
extended_access_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs.

Users are limited to perform operations on indices based on the user-specific access control rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#extended_access_control ManagedDatabaseOpensearch#extended_access_control}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window_dow`<sup>Optional</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowDow"></a>

```python
maintenance_window_dow: str
```

- *Type:* str

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#maintenance_window_dow ManagedDatabaseOpensearch#maintenance_window_dow}

---

##### `maintenance_window_time`<sup>Optional</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowTime"></a>

```python
maintenance_window_time: str
```

- *Type:* str

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#maintenance_window_time ManagedDatabaseOpensearch#maintenance_window_time}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.powered"></a>

```python
powered: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#powered ManagedDatabaseOpensearch#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.properties"></a>

```python
properties: ManagedDatabaseOpensearchProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#properties ManagedDatabaseOpensearch#properties}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#title ManagedDatabaseOpensearch#title}

---

### ManagedDatabaseOpensearchNodeStates <a name="ManagedDatabaseOpensearchNodeStates" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates()
```


### ManagedDatabaseOpensearchProperties <a name="ManagedDatabaseOpensearchProperties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties(
  automatic_utility_network_ip_filter: typing.Union[bool, IResolvable] = None,
  ip_filter: typing.List[str] = None,
  migration: ManagedDatabaseOpensearchPropertiesMigration = None,
  public_access: typing.Union[bool, IResolvable] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.automaticUtilityNetworkIpFilter">automatic_utility_network_ip_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Automatic utility network IP Filter. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ipFilter">ip_filter</a></code> | <code>typing.List[str]</code> | IP filter. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration">ManagedDatabaseOpensearchPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.publicAccess">public_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Public access allows connections to your Managed Database services via the public internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.version">version</a></code> | <code>str</code> | OpenSearch major version. |

---

##### `automatic_utility_network_ip_filter`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.automaticUtilityNetworkIpFilter"></a>

```python
automatic_utility_network_ip_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatic utility network IP Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#automatic_utility_network_ip_filter ManagedDatabaseOpensearch#automatic_utility_network_ip_filter}

---

##### `ip_filter`<sup>Optional</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ipFilter"></a>

```python
ip_filter: typing.List[str]
```

- *Type:* typing.List[str]

IP filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#ip_filter ManagedDatabaseOpensearch#ip_filter}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.migration"></a>

```python
migration: ManagedDatabaseOpensearchPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration">ManagedDatabaseOpensearchPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#migration ManagedDatabaseOpensearch#migration}

---

##### `public_access`<sup>Optional</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.publicAccess"></a>

```python
public_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Public access allows connections to your Managed Database services via the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#public_access ManagedDatabaseOpensearch#public_access}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.version"></a>

```python
version: str
```

- *Type:* str

OpenSearch major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#version ManagedDatabaseOpensearch#version}

---

### ManagedDatabaseOpensearchPropertiesMigration <a name="ManagedDatabaseOpensearchPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration(
  dbname: str = None,
  host: str = None,
  ignore_dbs: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  ssl: typing.Union[bool, IResolvable] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.dbname">dbname</a></code> | <code>str</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.host">host</a></code> | <code>str</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.ignoreDbs">ignore_dbs</a></code> | <code>str</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.password">password</a></code> | <code>str</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.username">username</a></code> | <code>str</code> | User name for authentication with the server where to migrate data from. |

---

##### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.dbname"></a>

```python
dbname: str
```

- *Type:* str

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#dbname ManagedDatabaseOpensearch#dbname}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.host"></a>

```python
host: str
```

- *Type:* str

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#host ManagedDatabaseOpensearch#host}

---

##### `ignore_dbs`<sup>Optional</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.ignoreDbs"></a>

```python
ignore_dbs: str
```

- *Type:* str

Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#ignore_dbs ManagedDatabaseOpensearch#ignore_dbs}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.password"></a>

```python
password: str
```

- *Type:* str

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#password ManagedDatabaseOpensearch#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#port ManagedDatabaseOpensearch#port}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#ssl ManagedDatabaseOpensearch#ssl}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration.property.username"></a>

```python
username: str
```

- *Type:* str

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#username ManagedDatabaseOpensearch#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseOpensearchComponentsList <a name="ManagedDatabaseOpensearchComponentsList" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDatabaseOpensearchComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagedDatabaseOpensearchComponentsOutputReference <a name="ManagedDatabaseOpensearchComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.route">route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.usage">usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents">ManagedDatabaseOpensearchComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.route"></a>

```python
route: str
```

- *Type:* str

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.usage"></a>

```python
usage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseOpensearchComponents
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents">ManagedDatabaseOpensearchComponents</a>

---


### ManagedDatabaseOpensearchNodeStatesList <a name="ManagedDatabaseOpensearchNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDatabaseOpensearchNodeStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagedDatabaseOpensearchNodeStatesOutputReference <a name="ManagedDatabaseOpensearchNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates">ManagedDatabaseOpensearchNodeStates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseOpensearchNodeStates
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates">ManagedDatabaseOpensearchNodeStates</a>

---


### ManagedDatabaseOpensearchPropertiesMigrationOutputReference <a name="ManagedDatabaseOpensearchPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetDbname">reset_dbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetIgnoreDbs">reset_ignore_dbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetSsl">reset_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dbname` <a name="reset_dbname" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetDbname"></a>

```python
def reset_dbname() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_ignore_dbs` <a name="reset_ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```python
def reset_ignore_dbs() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetSsl"></a>

```python
def reset_ssl() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.dbnameInput">dbname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.ignoreDbsInput">ignore_dbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.sslInput">ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.dbname">dbname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.ignoreDbs">ignore_dbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration">ManagedDatabaseOpensearchPropertiesMigration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbname_input`<sup>Optional</sup> <a name="dbname_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.dbnameInput"></a>

```python
dbname_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `ignore_dbs_input`<sup>Optional</sup> <a name="ignore_dbs_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```python
ignore_dbs_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.sslInput"></a>

```python
ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `dbname`<sup>Required</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.dbname"></a>

```python
dbname: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ignore_dbs`<sup>Required</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```python
ignore_dbs: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseOpensearchPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration">ManagedDatabaseOpensearchPropertiesMigration</a>

---


### ManagedDatabaseOpensearchPropertiesOutputReference <a name="ManagedDatabaseOpensearchPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_opensearch

managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putMigration">put_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">reset_automatic_utility_network_ip_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIpFilter">reset_ip_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetMigration">reset_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPublicAccess">reset_public_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_migration` <a name="put_migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putMigration"></a>

```python
def put_migration(
  dbname: str = None,
  host: str = None,
  ignore_dbs: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  ssl: typing.Union[bool, IResolvable] = None,
  username: str = None
) -> None
```

###### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putMigration.parameter.dbname"></a>

- *Type:* str

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#dbname ManagedDatabaseOpensearch#dbname}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putMigration.parameter.host"></a>

- *Type:* str

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#host ManagedDatabaseOpensearch#host}

---

###### `ignore_dbs`<sup>Optional</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putMigration.parameter.ignoreDbs"></a>

- *Type:* str

Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#ignore_dbs ManagedDatabaseOpensearch#ignore_dbs}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putMigration.parameter.password"></a>

- *Type:* str

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#password ManagedDatabaseOpensearch#password}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putMigration.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#port ManagedDatabaseOpensearch#port}

---

###### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putMigration.parameter.ssl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#ssl ManagedDatabaseOpensearch#ssl}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putMigration.parameter.username"></a>

- *Type:* str

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/managed_database_opensearch#username ManagedDatabaseOpensearch#username}

---

##### `reset_automatic_utility_network_ip_filter` <a name="reset_automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```python
def reset_automatic_utility_network_ip_filter() -> None
```

##### `reset_ip_filter` <a name="reset_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIpFilter"></a>

```python
def reset_ip_filter() -> None
```

##### `reset_migration` <a name="reset_migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetMigration"></a>

```python
def reset_migration() -> None
```

##### `reset_public_access` <a name="reset_public_access" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPublicAccess"></a>

```python
def reset_public_access() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference">ManagedDatabaseOpensearchPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">automatic_utility_network_ip_filter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilterInput">ip_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.migrationInput">migration_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration">ManagedDatabaseOpensearchPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccessInput">public_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">automatic_utility_network_ip_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilter">ip_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccess">public_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.migration"></a>

```python
migration: ManagedDatabaseOpensearchPropertiesMigrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigrationOutputReference">ManagedDatabaseOpensearchPropertiesMigrationOutputReference</a>

---

##### `automatic_utility_network_ip_filter_input`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```python
automatic_utility_network_ip_filter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_filter_input`<sup>Optional</sup> <a name="ip_filter_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilterInput"></a>

```python
ip_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `migration_input`<sup>Optional</sup> <a name="migration_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.migrationInput"></a>

```python
migration_input: ManagedDatabaseOpensearchPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesMigration">ManagedDatabaseOpensearchPropertiesMigration</a>

---

##### `public_access_input`<sup>Optional</sup> <a name="public_access_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccessInput"></a>

```python
public_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `automatic_utility_network_ip_filter`<sup>Required</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```python
automatic_utility_network_ip_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_filter`<sup>Required</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilter"></a>

```python
ip_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `public_access`<sup>Required</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccess"></a>

```python
public_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseOpensearchProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

---



