# `upcloud_managed_database_postgresql`

Refer to the Terraform Registory for docs: [`upcloud_managed_database_postgresql`](https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql).

# `managedDatabasePostgresql` Submodule <a name="`managedDatabasePostgresql` Submodule" id="@cdktf/provider-upcloud.managedDatabasePostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabasePostgresql <a name="ManagedDatabasePostgresql" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql upcloud_managed_database_postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresql(
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
  id: str = None,
  maintenance_window_dow: str = None,
  maintenance_window_time: str = None,
  powered: typing.Union[bool, IResolvable] = None,
  properties: ManagedDatabasePostgresqlProperties = None,
  title: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.plan">plan</a></code> | <code>str</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.powered">powered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.title">title</a></code> | <code>str</code> | Title of a managed database instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.name"></a>

- *Type:* str

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.plan"></a>

- *Type:* str

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#plan ManagedDatabasePostgresql#plan}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.zone"></a>

- *Type:* str

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#zone ManagedDatabasePostgresql#zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window_dow`<sup>Optional</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.maintenanceWindowDow"></a>

- *Type:* str

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#maintenance_window_dow ManagedDatabasePostgresql#maintenance_window_dow}

---

##### `maintenance_window_time`<sup>Optional</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.maintenanceWindowTime"></a>

- *Type:* str

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#maintenance_window_time ManagedDatabasePostgresql#maintenance_window_time}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.powered"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#powered ManagedDatabasePostgresql#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#properties ManagedDatabasePostgresql#properties}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.title"></a>

- *Type:* str

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#title ManagedDatabasePostgresql#title}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowDow">reset_maintenance_window_dow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowTime">reset_maintenance_window_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetPowered">reset_powered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetTitle">reset_title</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties"></a>

```python
def put_properties(
  admin_password: str = None,
  admin_username: str = None,
  automatic_utility_network_ip_filter: typing.Union[bool, IResolvable] = None,
  autovacuum_analyze_scale_factor: typing.Union[int, float] = None,
  autovacuum_analyze_threshold: typing.Union[int, float] = None,
  autovacuum_freeze_max_age: typing.Union[int, float] = None,
  autovacuum_max_workers: typing.Union[int, float] = None,
  autovacuum_naptime: typing.Union[int, float] = None,
  autovacuum_vacuum_cost_delay: typing.Union[int, float] = None,
  autovacuum_vacuum_cost_limit: typing.Union[int, float] = None,
  autovacuum_vacuum_scale_factor: typing.Union[int, float] = None,
  autovacuum_vacuum_threshold: typing.Union[int, float] = None,
  backup_hour: typing.Union[int, float] = None,
  backup_minute: typing.Union[int, float] = None,
  bgwriter_delay: typing.Union[int, float] = None,
  bgwriter_flush_after: typing.Union[int, float] = None,
  bgwriter_lru_maxpages: typing.Union[int, float] = None,
  bgwriter_lru_multiplier: typing.Union[int, float] = None,
  deadlock_timeout: typing.Union[int, float] = None,
  default_toast_compression: str = None,
  idle_in_transaction_session_timeout: typing.Union[int, float] = None,
  ip_filter: typing.List[str] = None,
  jit: typing.Union[bool, IResolvable] = None,
  log_autovacuum_min_duration: typing.Union[int, float] = None,
  log_error_verbosity: str = None,
  log_line_prefix: str = None,
  log_min_duration_statement: typing.Union[int, float] = None,
  log_temp_files: typing.Union[int, float] = None,
  max_files_per_process: typing.Union[int, float] = None,
  max_locks_per_transaction: typing.Union[int, float] = None,
  max_logical_replication_workers: typing.Union[int, float] = None,
  max_parallel_workers: typing.Union[int, float] = None,
  max_parallel_workers_per_gather: typing.Union[int, float] = None,
  max_pred_locks_per_transaction: typing.Union[int, float] = None,
  max_prepared_transactions: typing.Union[int, float] = None,
  max_replication_slots: typing.Union[int, float] = None,
  max_slot_wal_keep_size: typing.Union[int, float] = None,
  max_stack_depth: typing.Union[int, float] = None,
  max_standby_archive_delay: typing.Union[int, float] = None,
  max_standby_streaming_delay: typing.Union[int, float] = None,
  max_wal_senders: typing.Union[int, float] = None,
  max_worker_processes: typing.Union[int, float] = None,
  migration: ManagedDatabasePostgresqlPropertiesMigration = None,
  pgbouncer: ManagedDatabasePostgresqlPropertiesPgbouncer = None,
  pglookout: ManagedDatabasePostgresqlPropertiesPglookout = None,
  pg_partman_bgw_interval: typing.Union[int, float] = None,
  pg_partman_bgw_role: str = None,
  pg_read_replica: typing.Union[bool, IResolvable] = None,
  pg_service_to_fork_from: str = None,
  pg_stat_monitor_enable: typing.Union[bool, IResolvable] = None,
  pg_stat_monitor_pgsm_enable_query_plan: typing.Union[bool, IResolvable] = None,
  pg_stat_monitor_pgsm_max_buckets: typing.Union[int, float] = None,
  pg_stat_statements_track: str = None,
  public_access: typing.Union[bool, IResolvable] = None,
  shared_buffers_percentage: typing.Union[int, float] = None,
  synchronous_replication: str = None,
  temp_file_limit: typing.Union[int, float] = None,
  timescaledb: ManagedDatabasePostgresqlPropertiesTimescaledb = None,
  timezone: str = None,
  track_activity_query_size: typing.Union[int, float] = None,
  track_commit_timestamp: str = None,
  track_functions: str = None,
  track_io_timing: str = None,
  variant: str = None,
  version: str = None,
  wal_sender_timeout: typing.Union[int, float] = None,
  wal_writer_delay: typing.Union[int, float] = None,
  work_mem: typing.Union[int, float] = None
) -> None
```

###### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.adminPassword"></a>

- *Type:* str

Custom password for admin user.

Defaults to random string. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#admin_password ManagedDatabasePostgresql#admin_password}

---

###### `admin_username`<sup>Optional</sup> <a name="admin_username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.adminUsername"></a>

- *Type:* str

Custom username for admin user. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#admin_username ManagedDatabasePostgresql#admin_username}

---

###### `automatic_utility_network_ip_filter`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.automaticUtilityNetworkIpFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatic utility network IP Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#automatic_utility_network_ip_filter ManagedDatabasePostgresql#automatic_utility_network_ip_filter}

---

###### `autovacuum_analyze_scale_factor`<sup>Optional</sup> <a name="autovacuum_analyze_scale_factor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.autovacuumAnalyzeScaleFactor"></a>

- *Type:* typing.Union[int, float]

Specifies a fraction of the table size to add to `autovacuum_analyze_threshold` when deciding whether to trigger an `ANALYZE`.

The default is `0.2` (20% of table size)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_analyze_scale_factor ManagedDatabasePostgresql#autovacuum_analyze_scale_factor}

---

###### `autovacuum_analyze_threshold`<sup>Optional</sup> <a name="autovacuum_analyze_threshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.autovacuumAnalyzeThreshold"></a>

- *Type:* typing.Union[int, float]

Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table.

The default is `50` tuples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_analyze_threshold ManagedDatabasePostgresql#autovacuum_analyze_threshold}

---

###### `autovacuum_freeze_max_age`<sup>Optional</sup> <a name="autovacuum_freeze_max_age" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.autovacuumFreezeMaxAge"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum age (in transactions) that a table's `pg_class.relfrozenxid` field can attain before a `VACUUM` operation is forced to prevent transaction ID wraparound within the table.  				Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled.  				This parameter will cause the server to be restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_freeze_max_age ManagedDatabasePostgresql#autovacuum_freeze_max_age}

---

###### `autovacuum_max_workers`<sup>Optional</sup> <a name="autovacuum_max_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.autovacuumMaxWorkers"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time.

The default is `3`. This parameter can only be set at server start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_max_workers ManagedDatabasePostgresql#autovacuum_max_workers}

---

###### `autovacuum_naptime`<sup>Optional</sup> <a name="autovacuum_naptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.autovacuumNaptime"></a>

- *Type:* typing.Union[int, float]

Specifies the minimum delay between autovacuum runs on any given database.

The delay is measured in seconds, and the default is `1` minute

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_naptime ManagedDatabasePostgresql#autovacuum_naptime}

---

###### `autovacuum_vacuum_cost_delay`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.autovacuumVacuumCostDelay"></a>

- *Type:* typing.Union[int, float]

Specifies the cost delay value that will be used in automatic VACUUM operations.

If `-1` is specified, the regular `vacuum_cost_delay` value will be used. The default value is `20` milliseconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_delay ManagedDatabasePostgresql#autovacuum_vacuum_cost_delay}

---

###### `autovacuum_vacuum_cost_limit`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_limit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.autovacuumVacuumCostLimit"></a>

- *Type:* typing.Union[int, float]

Specifies the cost limit value that will be used in automatic `VACUUM` operations.

If `-1` is specified (which is the default), the regular `vacuum_cost_limit` value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_limit ManagedDatabasePostgresql#autovacuum_vacuum_cost_limit}

---

###### `autovacuum_vacuum_scale_factor`<sup>Optional</sup> <a name="autovacuum_vacuum_scale_factor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.autovacuumVacuumScaleFactor"></a>

- *Type:* typing.Union[int, float]

Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a `VACUUM`.

The default is `0.2` (20% of table size)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_scale_factor ManagedDatabasePostgresql#autovacuum_vacuum_scale_factor}

---

###### `autovacuum_vacuum_threshold`<sup>Optional</sup> <a name="autovacuum_vacuum_threshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.autovacuumVacuumThreshold"></a>

- *Type:* typing.Union[int, float]

Specifies the minimum number of updated or deleted tuples needed to trigger a `VACUUM` in any one table.

The default is `50` tuples

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_threshold ManagedDatabasePostgresql#autovacuum_vacuum_threshold}

---

###### `backup_hour`<sup>Optional</sup> <a name="backup_hour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.backupHour"></a>

- *Type:* typing.Union[int, float]

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#backup_hour ManagedDatabasePostgresql#backup_hour}

---

###### `backup_minute`<sup>Optional</sup> <a name="backup_minute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.backupMinute"></a>

- *Type:* typing.Union[int, float]

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#backup_minute ManagedDatabasePostgresql#backup_minute}

---

###### `bgwriter_delay`<sup>Optional</sup> <a name="bgwriter_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.bgwriterDelay"></a>

- *Type:* typing.Union[int, float]

Specifies the delay between activity rounds for the background writer in milliseconds. Default is `200`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#bgwriter_delay ManagedDatabasePostgresql#bgwriter_delay}

---

###### `bgwriter_flush_after`<sup>Optional</sup> <a name="bgwriter_flush_after" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.bgwriterFlushAfter"></a>

- *Type:* typing.Union[int, float]

Whenever more than `bgwriter_flush_after` bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage.

Specified in kilobytes, default is `512`. Setting of `0` disables forced writeback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#bgwriter_flush_after ManagedDatabasePostgresql#bgwriter_flush_after}

---

###### `bgwriter_lru_maxpages`<sup>Optional</sup> <a name="bgwriter_lru_maxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.bgwriterLruMaxpages"></a>

- *Type:* typing.Union[int, float]

In each round, no more than this many buffers will be written by the background writer.

Setting this to zero disables background writing. Default is `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#bgwriter_lru_maxpages ManagedDatabasePostgresql#bgwriter_lru_maxpages}

---

###### `bgwriter_lru_multiplier`<sup>Optional</sup> <a name="bgwriter_lru_multiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.bgwriterLruMultiplier"></a>

- *Type:* typing.Union[int, float]

The average recent need for new buffers is multiplied by `bgwriter_lru_multiplier` to arrive at an estimate of the number that will be needed during the next round (up to `bgwriter_lru_maxpages`).

`1.0` represents a "just in time" policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is `2.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#bgwriter_lru_multiplier ManagedDatabasePostgresql#bgwriter_lru_multiplier}

---

###### `deadlock_timeout`<sup>Optional</sup> <a name="deadlock_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.deadlockTimeout"></a>

- *Type:* typing.Union[int, float]

This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#deadlock_timeout ManagedDatabasePostgresql#deadlock_timeout}

---

###### `default_toast_compression`<sup>Optional</sup> <a name="default_toast_compression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.defaultToastCompression"></a>

- *Type:* str

Controls the amount of detail written in the server log for each message that is logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#default_toast_compression ManagedDatabasePostgresql#default_toast_compression}

---

###### `idle_in_transaction_session_timeout`<sup>Optional</sup> <a name="idle_in_transaction_session_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.idleInTransactionSessionTimeout"></a>

- *Type:* typing.Union[int, float]

Time out sessions with open transactions after this number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#idle_in_transaction_session_timeout ManagedDatabasePostgresql#idle_in_transaction_session_timeout}

---

###### `ip_filter`<sup>Optional</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.ipFilter"></a>

- *Type:* typing.List[str]

IP filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#ip_filter ManagedDatabasePostgresql#ip_filter}

---

###### `jit`<sup>Optional</sup> <a name="jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.jit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls system-wide use of Just-in-Time Compilation (JIT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#jit ManagedDatabasePostgresql#jit}

---

###### `log_autovacuum_min_duration`<sup>Optional</sup> <a name="log_autovacuum_min_duration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.logAutovacuumMinDuration"></a>

- *Type:* typing.Union[int, float]

Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds.

Setting this to `0` logs all autovacuum actions. The default `-1` disables logging autovacuum actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#log_autovacuum_min_duration ManagedDatabasePostgresql#log_autovacuum_min_duration}

---

###### `log_error_verbosity`<sup>Optional</sup> <a name="log_error_verbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.logErrorVerbosity"></a>

- *Type:* str

Controls the amount of detail written in the server log for each message that is logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#log_error_verbosity ManagedDatabasePostgresql#log_error_verbosity}

---

###### `log_line_prefix`<sup>Optional</sup> <a name="log_line_prefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.logLinePrefix"></a>

- *Type:* str

Choose from one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#log_line_prefix ManagedDatabasePostgresql#log_line_prefix}

---

###### `log_min_duration_statement`<sup>Optional</sup> <a name="log_min_duration_statement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.logMinDurationStatement"></a>

- *Type:* typing.Union[int, float]

Log statements that take more than this number of milliseconds to run, `-1` disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#log_min_duration_statement ManagedDatabasePostgresql#log_min_duration_statement}

---

###### `log_temp_files`<sup>Optional</sup> <a name="log_temp_files" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.logTempFiles"></a>

- *Type:* typing.Union[int, float]

Log statements for each temporary file created larger than this number of kilobytes, -1 disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#log_temp_files ManagedDatabasePostgresql#log_temp_files}

---

###### `max_files_per_process`<sup>Optional</sup> <a name="max_files_per_process" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxFilesPerProcess"></a>

- *Type:* typing.Union[int, float]

PostgreSQL maximum number of files that can be open per process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_files_per_process ManagedDatabasePostgresql#max_files_per_process}

---

###### `max_locks_per_transaction`<sup>Optional</sup> <a name="max_locks_per_transaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxLocksPerTransaction"></a>

- *Type:* typing.Union[int, float]

PostgreSQL maximum locks per transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_locks_per_transaction ManagedDatabasePostgresql#max_locks_per_transaction}

---

###### `max_logical_replication_workers`<sup>Optional</sup> <a name="max_logical_replication_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxLogicalReplicationWorkers"></a>

- *Type:* typing.Union[int, float]

PostgreSQL maximum logical replication workers (taken from the pool of `max_parallel_workers`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_logical_replication_workers ManagedDatabasePostgresql#max_logical_replication_workers}

---

###### `max_parallel_workers`<sup>Optional</sup> <a name="max_parallel_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxParallelWorkers"></a>

- *Type:* typing.Union[int, float]

Sets the maximum number of workers that the system can support for parallel queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_parallel_workers ManagedDatabasePostgresql#max_parallel_workers}

---

###### `max_parallel_workers_per_gather`<sup>Optional</sup> <a name="max_parallel_workers_per_gather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxParallelWorkersPerGather"></a>

- *Type:* typing.Union[int, float]

Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_parallel_workers_per_gather ManagedDatabasePostgresql#max_parallel_workers_per_gather}

---

###### `max_pred_locks_per_transaction`<sup>Optional</sup> <a name="max_pred_locks_per_transaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxPredLocksPerTransaction"></a>

- *Type:* typing.Union[int, float]

PostgreSQL maximum predicate locks per transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_pred_locks_per_transaction ManagedDatabasePostgresql#max_pred_locks_per_transaction}

---

###### `max_prepared_transactions`<sup>Optional</sup> <a name="max_prepared_transactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxPreparedTransactions"></a>

- *Type:* typing.Union[int, float]

PostgreSQL maximum prepared transactions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_prepared_transactions ManagedDatabasePostgresql#max_prepared_transactions}

---

###### `max_replication_slots`<sup>Optional</sup> <a name="max_replication_slots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxReplicationSlots"></a>

- *Type:* typing.Union[int, float]

PostgreSQL maximum replication slots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_replication_slots ManagedDatabasePostgresql#max_replication_slots}

---

###### `max_slot_wal_keep_size`<sup>Optional</sup> <a name="max_slot_wal_keep_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxSlotWalKeepSize"></a>

- *Type:* typing.Union[int, float]

PostgreSQL maximum WAL size (MB) reserved for replication slots.

Default is `-1` (unlimited). `wal_keep_size` minimum WAL size setting takes precedence over this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_slot_wal_keep_size ManagedDatabasePostgresql#max_slot_wal_keep_size}

---

###### `max_stack_depth`<sup>Optional</sup> <a name="max_stack_depth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxStackDepth"></a>

- *Type:* typing.Union[int, float]

Maximum depth of the stack in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_stack_depth ManagedDatabasePostgresql#max_stack_depth}

---

###### `max_standby_archive_delay`<sup>Optional</sup> <a name="max_standby_archive_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxStandbyArchiveDelay"></a>

- *Type:* typing.Union[int, float]

Max standby archive delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_standby_archive_delay ManagedDatabasePostgresql#max_standby_archive_delay}

---

###### `max_standby_streaming_delay`<sup>Optional</sup> <a name="max_standby_streaming_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxStandbyStreamingDelay"></a>

- *Type:* typing.Union[int, float]

Max standby streaming delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_standby_streaming_delay ManagedDatabasePostgresql#max_standby_streaming_delay}

---

###### `max_wal_senders`<sup>Optional</sup> <a name="max_wal_senders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxWalSenders"></a>

- *Type:* typing.Union[int, float]

PostgreSQL maximum WAL senders.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_wal_senders ManagedDatabasePostgresql#max_wal_senders}

---

###### `max_worker_processes`<sup>Optional</sup> <a name="max_worker_processes" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.maxWorkerProcesses"></a>

- *Type:* typing.Union[int, float]

Sets the maximum number of background processes that the system can support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_worker_processes ManagedDatabasePostgresql#max_worker_processes}

---

###### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.migration"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#migration ManagedDatabasePostgresql#migration}

---

###### `pgbouncer`<sup>Optional</sup> <a name="pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.pgbouncer"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pgbouncer ManagedDatabasePostgresql#pgbouncer}

---

###### `pglookout`<sup>Optional</sup> <a name="pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.pglookout"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

pglookout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pglookout ManagedDatabasePostgresql#pglookout}

---

###### `pg_partman_bgw_interval`<sup>Optional</sup> <a name="pg_partman_bgw_interval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.pgPartmanBgwInterval"></a>

- *Type:* typing.Union[int, float]

Sets the time interval to run pg_partman's scheduled tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_partman_bgw_interval ManagedDatabasePostgresql#pg_partman_bgw_interval}

---

###### `pg_partman_bgw_role`<sup>Optional</sup> <a name="pg_partman_bgw_role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.pgPartmanBgwRole"></a>

- *Type:* str

Controls which role to use for pg_partman's scheduled background tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_partman_bgw_role ManagedDatabasePostgresql#pg_partman_bgw_role}

---

###### `pg_read_replica`<sup>Optional</sup> <a name="pg_read_replica" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.pgReadReplica"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the service which is being forked be a read replica (deprecated, use read_replica service integration instead).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_read_replica ManagedDatabasePostgresql#pg_read_replica}

---

###### `pg_service_to_fork_from`<sup>Optional</sup> <a name="pg_service_to_fork_from" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.pgServiceToForkFrom"></a>

- *Type:* str

Name of the PG Service from which to fork (deprecated, use service_to_fork_from).

This has effect only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_service_to_fork_from ManagedDatabasePostgresql#pg_service_to_fork_from}

---

###### `pg_stat_monitor_enable`<sup>Optional</sup> <a name="pg_stat_monitor_enable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.pgStatMonitorEnable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the pg_stat_monitor extension.

Enabling this extension will cause the cluster to be restarted.When this extension is enabled, pg_stat_statements results for utility commands are unreliable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_stat_monitor_enable ManagedDatabasePostgresql#pg_stat_monitor_enable}

---

###### `pg_stat_monitor_pgsm_enable_query_plan`<sup>Optional</sup> <a name="pg_stat_monitor_pgsm_enable_query_plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.pgStatMonitorPgsmEnableQueryPlan"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables or disables query plan monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_enable_query_plan ManagedDatabasePostgresql#pg_stat_monitor_pgsm_enable_query_plan}

---

###### `pg_stat_monitor_pgsm_max_buckets`<sup>Optional</sup> <a name="pg_stat_monitor_pgsm_max_buckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.pgStatMonitorPgsmMaxBuckets"></a>

- *Type:* typing.Union[int, float]

Sets the maximum number of buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_max_buckets ManagedDatabasePostgresql#pg_stat_monitor_pgsm_max_buckets}

---

###### `pg_stat_statements_track`<sup>Optional</sup> <a name="pg_stat_statements_track" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.pgStatStatementsTrack"></a>

- *Type:* str

Controls which statements are counted.

Specify top to track top-level statements (those issued directly by clients), all to also track nested statements (such as statements invoked within functions),
or none to disable statement statistics collection.The default value is `top`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_stat_statements_track ManagedDatabasePostgresql#pg_stat_statements_track}

---

###### `public_access`<sup>Optional</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.publicAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Public access allows connections to your Managed Database services via the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#public_access ManagedDatabasePostgresql#public_access}

---

###### `shared_buffers_percentage`<sup>Optional</sup> <a name="shared_buffers_percentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.sharedBuffersPercentage"></a>

- *Type:* typing.Union[int, float]

Percentage of total RAM that the database server uses for shared memory buffers.

Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the `shared_buffers` configuration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#shared_buffers_percentage ManagedDatabasePostgresql#shared_buffers_percentage}

---

###### `synchronous_replication`<sup>Optional</sup> <a name="synchronous_replication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.synchronousReplication"></a>

- *Type:* str

Synchronous replication type. Note that the service plan also needs to support synchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#synchronous_replication ManagedDatabasePostgresql#synchronous_replication}

---

###### `temp_file_limit`<sup>Optional</sup> <a name="temp_file_limit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.tempFileLimit"></a>

- *Type:* typing.Union[int, float]

PostgreSQL temporary file limit in KiB, -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#temp_file_limit ManagedDatabasePostgresql#temp_file_limit}

---

###### `timescaledb`<sup>Optional</sup> <a name="timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.timescaledb"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#timescaledb ManagedDatabasePostgresql#timescaledb}

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.timezone"></a>

- *Type:* str

timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#timezone ManagedDatabasePostgresql#timezone}

---

###### `track_activity_query_size`<sup>Optional</sup> <a name="track_activity_query_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.trackActivityQuerySize"></a>

- *Type:* typing.Union[int, float]

Specifies the number of bytes reserved to track the currently executing command for each active session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#track_activity_query_size ManagedDatabasePostgresql#track_activity_query_size}

---

###### `track_commit_timestamp`<sup>Optional</sup> <a name="track_commit_timestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.trackCommitTimestamp"></a>

- *Type:* str

Record commit time of transactions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#track_commit_timestamp ManagedDatabasePostgresql#track_commit_timestamp}

---

###### `track_functions`<sup>Optional</sup> <a name="track_functions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.trackFunctions"></a>

- *Type:* str

Enables tracking of function call counts and time used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#track_functions ManagedDatabasePostgresql#track_functions}

---

###### `track_io_timing`<sup>Optional</sup> <a name="track_io_timing" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.trackIoTiming"></a>

- *Type:* str

Enables timing of database I/O calls.

This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#track_io_timing ManagedDatabasePostgresql#track_io_timing}

---

###### `variant`<sup>Optional</sup> <a name="variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.variant"></a>

- *Type:* str

Variant of the PostgreSQL service, may affect the features that are exposed by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#variant ManagedDatabasePostgresql#variant}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.version"></a>

- *Type:* str

PostgreSQL major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#version ManagedDatabasePostgresql#version}

---

###### `wal_sender_timeout`<sup>Optional</sup> <a name="wal_sender_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.walSenderTimeout"></a>

- *Type:* typing.Union[int, float]

Terminate replication connections that are inactive for longer than this amount of time, in milliseconds.

Setting this value to `0` disables the timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#wal_sender_timeout ManagedDatabasePostgresql#wal_sender_timeout}

---

###### `wal_writer_delay`<sup>Optional</sup> <a name="wal_writer_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.walWriterDelay"></a>

- *Type:* typing.Union[int, float]

WAL flush interval in milliseconds.

Note that setting this value to lower than the default `200`ms may negatively impact performance

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#wal_writer_delay ManagedDatabasePostgresql#wal_writer_delay}

---

###### `work_mem`<sup>Optional</sup> <a name="work_mem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.workMem"></a>

- *Type:* typing.Union[int, float]

Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files,  			in MB.

Default is 1MB + 0.075% of total RAM (up to 32MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#work_mem ManagedDatabasePostgresql#work_mem}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window_dow` <a name="reset_maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowDow"></a>

```python
def reset_maintenance_window_dow() -> None
```

##### `reset_maintenance_window_time` <a name="reset_maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowTime"></a>

```python
def reset_maintenance_window_time() -> None
```

##### `reset_powered` <a name="reset_powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetPowered"></a>

```python
def reset_powered() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetTitle"></a>

```python
def reset_title() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagedDatabasePostgresql resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresql.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresql.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresql.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresql.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagedDatabasePostgresql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedDatabasePostgresql to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedDatabasePostgresql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabasePostgresql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.components">components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList">ManagedDatabasePostgresqlComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nodeStates">node_states</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList">ManagedDatabasePostgresqlNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.primaryDatabase">primary_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference">ManagedDatabasePostgresqlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceHost">service_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePassword">service_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePort">service_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUri">service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUsername">service_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.sslmode">sslmode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDowInput">maintenance_window_dow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTimeInput">maintenance_window_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.poweredInput">powered_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.powered">powered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.components"></a>

```python
components: ManagedDatabasePostgresqlComponentsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList">ManagedDatabasePostgresqlComponentsList</a>

---

##### `node_states`<sup>Required</sup> <a name="node_states" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nodeStates"></a>

```python
node_states: ManagedDatabasePostgresqlNodeStatesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList">ManagedDatabasePostgresqlNodeStatesList</a>

---

##### `primary_database`<sup>Required</sup> <a name="primary_database" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.primaryDatabase"></a>

```python
primary_database: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.properties"></a>

```python
properties: ManagedDatabasePostgresqlPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference">ManagedDatabasePostgresqlPropertiesOutputReference</a>

---

##### `service_host`<sup>Required</sup> <a name="service_host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceHost"></a>

```python
service_host: str
```

- *Type:* str

---

##### `service_password`<sup>Required</sup> <a name="service_password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePassword"></a>

```python
service_password: str
```

- *Type:* str

---

##### `service_port`<sup>Required</sup> <a name="service_port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePort"></a>

```python
service_port: str
```

- *Type:* str

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

---

##### `service_username`<sup>Required</sup> <a name="service_username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUsername"></a>

```python
service_username: str
```

- *Type:* str

---

##### `sslmode`<sup>Required</sup> <a name="sslmode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.sslmode"></a>

```python
sslmode: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_window_dow_input`<sup>Optional</sup> <a name="maintenance_window_dow_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDowInput"></a>

```python
maintenance_window_dow_input: str
```

- *Type:* str

---

##### `maintenance_window_time_input`<sup>Optional</sup> <a name="maintenance_window_time_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTimeInput"></a>

```python
maintenance_window_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `powered_input`<sup>Optional</sup> <a name="powered_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.poweredInput"></a>

```python
powered_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.propertiesInput"></a>

```python
properties_input: ManagedDatabasePostgresqlProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_window_dow`<sup>Required</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDow"></a>

```python
maintenance_window_dow: str
```

- *Type:* str

---

##### `maintenance_window_time`<sup>Required</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTime"></a>

```python
maintenance_window_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `powered`<sup>Required</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.powered"></a>

```python
powered: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabasePostgresqlComponents <a name="ManagedDatabasePostgresqlComponents" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlComponents()
```


### ManagedDatabasePostgresqlConfig <a name="ManagedDatabasePostgresqlConfig" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlConfig(
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
  id: str = None,
  maintenance_window_dow: str = None,
  maintenance_window_time: str = None,
  powered: typing.Union[bool, IResolvable] = None,
  properties: ManagedDatabasePostgresqlProperties = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.name">name</a></code> | <code>str</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.plan">plan</a></code> | <code>str</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.zone">zone</a></code> | <code>str</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.powered">powered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.title">title</a></code> | <code>str</code> | Title of a managed database instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.plan"></a>

```python
plan: str
```

- *Type:* str

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#plan ManagedDatabasePostgresql#plan}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#zone ManagedDatabasePostgresql#zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window_dow`<sup>Optional</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowDow"></a>

```python
maintenance_window_dow: str
```

- *Type:* str

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#maintenance_window_dow ManagedDatabasePostgresql#maintenance_window_dow}

---

##### `maintenance_window_time`<sup>Optional</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowTime"></a>

```python
maintenance_window_time: str
```

- *Type:* str

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#maintenance_window_time ManagedDatabasePostgresql#maintenance_window_time}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.powered"></a>

```python
powered: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#powered ManagedDatabasePostgresql#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.properties"></a>

```python
properties: ManagedDatabasePostgresqlProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#properties ManagedDatabasePostgresql#properties}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#title ManagedDatabasePostgresql#title}

---

### ManagedDatabasePostgresqlNodeStates <a name="ManagedDatabasePostgresqlNodeStates" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates()
```


### ManagedDatabasePostgresqlProperties <a name="ManagedDatabasePostgresqlProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlProperties(
  admin_password: str = None,
  admin_username: str = None,
  automatic_utility_network_ip_filter: typing.Union[bool, IResolvable] = None,
  autovacuum_analyze_scale_factor: typing.Union[int, float] = None,
  autovacuum_analyze_threshold: typing.Union[int, float] = None,
  autovacuum_freeze_max_age: typing.Union[int, float] = None,
  autovacuum_max_workers: typing.Union[int, float] = None,
  autovacuum_naptime: typing.Union[int, float] = None,
  autovacuum_vacuum_cost_delay: typing.Union[int, float] = None,
  autovacuum_vacuum_cost_limit: typing.Union[int, float] = None,
  autovacuum_vacuum_scale_factor: typing.Union[int, float] = None,
  autovacuum_vacuum_threshold: typing.Union[int, float] = None,
  backup_hour: typing.Union[int, float] = None,
  backup_minute: typing.Union[int, float] = None,
  bgwriter_delay: typing.Union[int, float] = None,
  bgwriter_flush_after: typing.Union[int, float] = None,
  bgwriter_lru_maxpages: typing.Union[int, float] = None,
  bgwriter_lru_multiplier: typing.Union[int, float] = None,
  deadlock_timeout: typing.Union[int, float] = None,
  default_toast_compression: str = None,
  idle_in_transaction_session_timeout: typing.Union[int, float] = None,
  ip_filter: typing.List[str] = None,
  jit: typing.Union[bool, IResolvable] = None,
  log_autovacuum_min_duration: typing.Union[int, float] = None,
  log_error_verbosity: str = None,
  log_line_prefix: str = None,
  log_min_duration_statement: typing.Union[int, float] = None,
  log_temp_files: typing.Union[int, float] = None,
  max_files_per_process: typing.Union[int, float] = None,
  max_locks_per_transaction: typing.Union[int, float] = None,
  max_logical_replication_workers: typing.Union[int, float] = None,
  max_parallel_workers: typing.Union[int, float] = None,
  max_parallel_workers_per_gather: typing.Union[int, float] = None,
  max_pred_locks_per_transaction: typing.Union[int, float] = None,
  max_prepared_transactions: typing.Union[int, float] = None,
  max_replication_slots: typing.Union[int, float] = None,
  max_slot_wal_keep_size: typing.Union[int, float] = None,
  max_stack_depth: typing.Union[int, float] = None,
  max_standby_archive_delay: typing.Union[int, float] = None,
  max_standby_streaming_delay: typing.Union[int, float] = None,
  max_wal_senders: typing.Union[int, float] = None,
  max_worker_processes: typing.Union[int, float] = None,
  migration: ManagedDatabasePostgresqlPropertiesMigration = None,
  pgbouncer: ManagedDatabasePostgresqlPropertiesPgbouncer = None,
  pglookout: ManagedDatabasePostgresqlPropertiesPglookout = None,
  pg_partman_bgw_interval: typing.Union[int, float] = None,
  pg_partman_bgw_role: str = None,
  pg_read_replica: typing.Union[bool, IResolvable] = None,
  pg_service_to_fork_from: str = None,
  pg_stat_monitor_enable: typing.Union[bool, IResolvable] = None,
  pg_stat_monitor_pgsm_enable_query_plan: typing.Union[bool, IResolvable] = None,
  pg_stat_monitor_pgsm_max_buckets: typing.Union[int, float] = None,
  pg_stat_statements_track: str = None,
  public_access: typing.Union[bool, IResolvable] = None,
  shared_buffers_percentage: typing.Union[int, float] = None,
  synchronous_replication: str = None,
  temp_file_limit: typing.Union[int, float] = None,
  timescaledb: ManagedDatabasePostgresqlPropertiesTimescaledb = None,
  timezone: str = None,
  track_activity_query_size: typing.Union[int, float] = None,
  track_commit_timestamp: str = None,
  track_functions: str = None,
  track_io_timing: str = None,
  variant: str = None,
  version: str = None,
  wal_sender_timeout: typing.Union[int, float] = None,
  wal_writer_delay: typing.Union[int, float] = None,
  work_mem: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminPassword">admin_password</a></code> | <code>str</code> | Custom password for admin user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminUsername">admin_username</a></code> | <code>str</code> | Custom username for admin user. This must be set only when a new service is being created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.automaticUtilityNetworkIpFilter">automatic_utility_network_ip_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Automatic utility network IP Filter. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeScaleFactor">autovacuum_analyze_scale_factor</a></code> | <code>typing.Union[int, float]</code> | Specifies a fraction of the table size to add to `autovacuum_analyze_threshold` when deciding whether to trigger an `ANALYZE`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeThreshold">autovacuum_analyze_threshold</a></code> | <code>typing.Union[int, float]</code> | Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumFreezeMaxAge">autovacuum_freeze_max_age</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum age (in transactions) that a table's `pg_class.relfrozenxid` field can attain before a `VACUUM` operation is forced to prevent transaction ID wraparound within the table.  				Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled.  				This parameter will cause the server to be restarted. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumMaxWorkers">autovacuum_max_workers</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumNaptime">autovacuum_naptime</a></code> | <code>typing.Union[int, float]</code> | Specifies the minimum delay between autovacuum runs on any given database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostDelay">autovacuum_vacuum_cost_delay</a></code> | <code>typing.Union[int, float]</code> | Specifies the cost delay value that will be used in automatic VACUUM operations. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostLimit">autovacuum_vacuum_cost_limit</a></code> | <code>typing.Union[int, float]</code> | Specifies the cost limit value that will be used in automatic `VACUUM` operations. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumScaleFactor">autovacuum_vacuum_scale_factor</a></code> | <code>typing.Union[int, float]</code> | Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a `VACUUM`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumThreshold">autovacuum_vacuum_threshold</a></code> | <code>typing.Union[int, float]</code> | Specifies the minimum number of updated or deleted tuples needed to trigger a `VACUUM` in any one table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterDelay">bgwriter_delay</a></code> | <code>typing.Union[int, float]</code> | Specifies the delay between activity rounds for the background writer in milliseconds. Default is `200`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterFlushAfter">bgwriter_flush_after</a></code> | <code>typing.Union[int, float]</code> | Whenever more than `bgwriter_flush_after` bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMaxpages">bgwriter_lru_maxpages</a></code> | <code>typing.Union[int, float]</code> | In each round, no more than this many buffers will be written by the background writer. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMultiplier">bgwriter_lru_multiplier</a></code> | <code>typing.Union[int, float]</code> | The average recent need for new buffers is multiplied by `bgwriter_lru_multiplier` to arrive at an estimate of the number that will be needed during the next round (up to `bgwriter_lru_maxpages`). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.deadlockTimeout">deadlock_timeout</a></code> | <code>typing.Union[int, float]</code> | This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.defaultToastCompression">default_toast_compression</a></code> | <code>str</code> | Controls the amount of detail written in the server log for each message that is logged. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.idleInTransactionSessionTimeout">idle_in_transaction_session_timeout</a></code> | <code>typing.Union[int, float]</code> | Time out sessions with open transactions after this number of milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.ipFilter">ip_filter</a></code> | <code>typing.List[str]</code> | IP filter. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.jit">jit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls system-wide use of Just-in-Time Compilation (JIT). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logAutovacuumMinDuration">log_autovacuum_min_duration</a></code> | <code>typing.Union[int, float]</code> | Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logErrorVerbosity">log_error_verbosity</a></code> | <code>str</code> | Controls the amount of detail written in the server log for each message that is logged. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logLinePrefix">log_line_prefix</a></code> | <code>str</code> | Choose from one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze etc. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logMinDurationStatement">log_min_duration_statement</a></code> | <code>typing.Union[int, float]</code> | Log statements that take more than this number of milliseconds to run, `-1` disables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logTempFiles">log_temp_files</a></code> | <code>typing.Union[int, float]</code> | Log statements for each temporary file created larger than this number of kilobytes, -1 disables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxFilesPerProcess">max_files_per_process</a></code> | <code>typing.Union[int, float]</code> | PostgreSQL maximum number of files that can be open per process. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLocksPerTransaction">max_locks_per_transaction</a></code> | <code>typing.Union[int, float]</code> | PostgreSQL maximum locks per transaction. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLogicalReplicationWorkers">max_logical_replication_workers</a></code> | <code>typing.Union[int, float]</code> | PostgreSQL maximum logical replication workers (taken from the pool of `max_parallel_workers`). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkers">max_parallel_workers</a></code> | <code>typing.Union[int, float]</code> | Sets the maximum number of workers that the system can support for parallel queries. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkersPerGather">max_parallel_workers_per_gather</a></code> | <code>typing.Union[int, float]</code> | Sets the maximum number of workers that can be started by a single Gather or Gather Merge node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPredLocksPerTransaction">max_pred_locks_per_transaction</a></code> | <code>typing.Union[int, float]</code> | PostgreSQL maximum predicate locks per transaction. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPreparedTransactions">max_prepared_transactions</a></code> | <code>typing.Union[int, float]</code> | PostgreSQL maximum prepared transactions. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxReplicationSlots">max_replication_slots</a></code> | <code>typing.Union[int, float]</code> | PostgreSQL maximum replication slots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSlotWalKeepSize">max_slot_wal_keep_size</a></code> | <code>typing.Union[int, float]</code> | PostgreSQL maximum WAL size (MB) reserved for replication slots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStackDepth">max_stack_depth</a></code> | <code>typing.Union[int, float]</code> | Maximum depth of the stack in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyArchiveDelay">max_standby_archive_delay</a></code> | <code>typing.Union[int, float]</code> | Max standby archive delay in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyStreamingDelay">max_standby_streaming_delay</a></code> | <code>typing.Union[int, float]</code> | Max standby streaming delay in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWalSenders">max_wal_senders</a></code> | <code>typing.Union[int, float]</code> | PostgreSQL maximum WAL senders. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWorkerProcesses">max_worker_processes</a></code> | <code>typing.Union[int, float]</code> | Sets the maximum number of background processes that the system can support. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgbouncer">pgbouncer</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pglookout">pglookout</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | pglookout block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwInterval">pg_partman_bgw_interval</a></code> | <code>typing.Union[int, float]</code> | Sets the time interval to run pg_partman's scheduled tasks. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwRole">pg_partman_bgw_role</a></code> | <code>str</code> | Controls which role to use for pg_partman's scheduled background tasks. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgReadReplica">pg_read_replica</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the service which is being forked be a read replica (deprecated, use read_replica service integration instead). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgServiceToForkFrom">pg_service_to_fork_from</a></code> | <code>str</code> | Name of the PG Service from which to fork (deprecated, use service_to_fork_from). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorEnable">pg_stat_monitor_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the pg_stat_monitor extension. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmEnableQueryPlan">pg_stat_monitor_pgsm_enable_query_plan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables or disables query plan monitoring. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmMaxBuckets">pg_stat_monitor_pgsm_max_buckets</a></code> | <code>typing.Union[int, float]</code> | Sets the maximum number of buckets. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatStatementsTrack">pg_stat_statements_track</a></code> | <code>str</code> | Controls which statements are counted. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.publicAccess">public_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Public access allows connections to your Managed Database services via the public internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.sharedBuffersPercentage">shared_buffers_percentage</a></code> | <code>typing.Union[int, float]</code> | Percentage of total RAM that the database server uses for shared memory buffers. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.synchronousReplication">synchronous_replication</a></code> | <code>str</code> | Synchronous replication type. Note that the service plan also needs to support synchronous replication. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.tempFileLimit">temp_file_limit</a></code> | <code>typing.Union[int, float]</code> | PostgreSQL temporary file limit in KiB, -1 for unlimited. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | timescaledb block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timezone">timezone</a></code> | <code>str</code> | timezone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackActivityQuerySize">track_activity_query_size</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of bytes reserved to track the currently executing command for each active session. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackCommitTimestamp">track_commit_timestamp</a></code> | <code>str</code> | Record commit time of transactions. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackFunctions">track_functions</a></code> | <code>str</code> | Enables tracking of function call counts and time used. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackIoTiming">track_io_timing</a></code> | <code>str</code> | Enables timing of database I/O calls. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.variant">variant</a></code> | <code>str</code> | Variant of the PostgreSQL service, may affect the features that are exposed by default. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.version">version</a></code> | <code>str</code> | PostgreSQL major version. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walSenderTimeout">wal_sender_timeout</a></code> | <code>typing.Union[int, float]</code> | Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walWriterDelay">wal_writer_delay</a></code> | <code>typing.Union[int, float]</code> | WAL flush interval in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.workMem">work_mem</a></code> | <code>typing.Union[int, float]</code> | Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files,  			in MB. |

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Custom password for admin user.

Defaults to random string. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#admin_password ManagedDatabasePostgresql#admin_password}

---

##### `admin_username`<sup>Optional</sup> <a name="admin_username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

Custom username for admin user. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#admin_username ManagedDatabasePostgresql#admin_username}

---

##### `automatic_utility_network_ip_filter`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.automaticUtilityNetworkIpFilter"></a>

```python
automatic_utility_network_ip_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatic utility network IP Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#automatic_utility_network_ip_filter ManagedDatabasePostgresql#automatic_utility_network_ip_filter}

---

##### `autovacuum_analyze_scale_factor`<sup>Optional</sup> <a name="autovacuum_analyze_scale_factor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeScaleFactor"></a>

```python
autovacuum_analyze_scale_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a fraction of the table size to add to `autovacuum_analyze_threshold` when deciding whether to trigger an `ANALYZE`.

The default is `0.2` (20% of table size)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_analyze_scale_factor ManagedDatabasePostgresql#autovacuum_analyze_scale_factor}

---

##### `autovacuum_analyze_threshold`<sup>Optional</sup> <a name="autovacuum_analyze_threshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeThreshold"></a>

```python
autovacuum_analyze_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table.

The default is `50` tuples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_analyze_threshold ManagedDatabasePostgresql#autovacuum_analyze_threshold}

---

##### `autovacuum_freeze_max_age`<sup>Optional</sup> <a name="autovacuum_freeze_max_age" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumFreezeMaxAge"></a>

```python
autovacuum_freeze_max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum age (in transactions) that a table's `pg_class.relfrozenxid` field can attain before a `VACUUM` operation is forced to prevent transaction ID wraparound within the table.  				Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled.  				This parameter will cause the server to be restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_freeze_max_age ManagedDatabasePostgresql#autovacuum_freeze_max_age}

---

##### `autovacuum_max_workers`<sup>Optional</sup> <a name="autovacuum_max_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumMaxWorkers"></a>

```python
autovacuum_max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time.

The default is `3`. This parameter can only be set at server start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_max_workers ManagedDatabasePostgresql#autovacuum_max_workers}

---

##### `autovacuum_naptime`<sup>Optional</sup> <a name="autovacuum_naptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumNaptime"></a>

```python
autovacuum_naptime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the minimum delay between autovacuum runs on any given database.

The delay is measured in seconds, and the default is `1` minute

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_naptime ManagedDatabasePostgresql#autovacuum_naptime}

---

##### `autovacuum_vacuum_cost_delay`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostDelay"></a>

```python
autovacuum_vacuum_cost_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the cost delay value that will be used in automatic VACUUM operations.

If `-1` is specified, the regular `vacuum_cost_delay` value will be used. The default value is `20` milliseconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_delay ManagedDatabasePostgresql#autovacuum_vacuum_cost_delay}

---

##### `autovacuum_vacuum_cost_limit`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_limit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostLimit"></a>

```python
autovacuum_vacuum_cost_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the cost limit value that will be used in automatic `VACUUM` operations.

If `-1` is specified (which is the default), the regular `vacuum_cost_limit` value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_limit ManagedDatabasePostgresql#autovacuum_vacuum_cost_limit}

---

##### `autovacuum_vacuum_scale_factor`<sup>Optional</sup> <a name="autovacuum_vacuum_scale_factor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumScaleFactor"></a>

```python
autovacuum_vacuum_scale_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a `VACUUM`.

The default is `0.2` (20% of table size)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_scale_factor ManagedDatabasePostgresql#autovacuum_vacuum_scale_factor}

---

##### `autovacuum_vacuum_threshold`<sup>Optional</sup> <a name="autovacuum_vacuum_threshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumThreshold"></a>

```python
autovacuum_vacuum_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the minimum number of updated or deleted tuples needed to trigger a `VACUUM` in any one table.

The default is `50` tuples

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_threshold ManagedDatabasePostgresql#autovacuum_vacuum_threshold}

---

##### `backup_hour`<sup>Optional</sup> <a name="backup_hour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupHour"></a>

```python
backup_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#backup_hour ManagedDatabasePostgresql#backup_hour}

---

##### `backup_minute`<sup>Optional</sup> <a name="backup_minute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupMinute"></a>

```python
backup_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#backup_minute ManagedDatabasePostgresql#backup_minute}

---

##### `bgwriter_delay`<sup>Optional</sup> <a name="bgwriter_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterDelay"></a>

```python
bgwriter_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the delay between activity rounds for the background writer in milliseconds. Default is `200`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#bgwriter_delay ManagedDatabasePostgresql#bgwriter_delay}

---

##### `bgwriter_flush_after`<sup>Optional</sup> <a name="bgwriter_flush_after" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterFlushAfter"></a>

```python
bgwriter_flush_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Whenever more than `bgwriter_flush_after` bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage.

Specified in kilobytes, default is `512`. Setting of `0` disables forced writeback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#bgwriter_flush_after ManagedDatabasePostgresql#bgwriter_flush_after}

---

##### `bgwriter_lru_maxpages`<sup>Optional</sup> <a name="bgwriter_lru_maxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMaxpages"></a>

```python
bgwriter_lru_maxpages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

In each round, no more than this many buffers will be written by the background writer.

Setting this to zero disables background writing. Default is `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#bgwriter_lru_maxpages ManagedDatabasePostgresql#bgwriter_lru_maxpages}

---

##### `bgwriter_lru_multiplier`<sup>Optional</sup> <a name="bgwriter_lru_multiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMultiplier"></a>

```python
bgwriter_lru_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The average recent need for new buffers is multiplied by `bgwriter_lru_multiplier` to arrive at an estimate of the number that will be needed during the next round (up to `bgwriter_lru_maxpages`).

`1.0` represents a "just in time" policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is `2.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#bgwriter_lru_multiplier ManagedDatabasePostgresql#bgwriter_lru_multiplier}

---

##### `deadlock_timeout`<sup>Optional</sup> <a name="deadlock_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.deadlockTimeout"></a>

```python
deadlock_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#deadlock_timeout ManagedDatabasePostgresql#deadlock_timeout}

---

##### `default_toast_compression`<sup>Optional</sup> <a name="default_toast_compression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.defaultToastCompression"></a>

```python
default_toast_compression: str
```

- *Type:* str

Controls the amount of detail written in the server log for each message that is logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#default_toast_compression ManagedDatabasePostgresql#default_toast_compression}

---

##### `idle_in_transaction_session_timeout`<sup>Optional</sup> <a name="idle_in_transaction_session_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.idleInTransactionSessionTimeout"></a>

```python
idle_in_transaction_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time out sessions with open transactions after this number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#idle_in_transaction_session_timeout ManagedDatabasePostgresql#idle_in_transaction_session_timeout}

---

##### `ip_filter`<sup>Optional</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.ipFilter"></a>

```python
ip_filter: typing.List[str]
```

- *Type:* typing.List[str]

IP filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#ip_filter ManagedDatabasePostgresql#ip_filter}

---

##### `jit`<sup>Optional</sup> <a name="jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.jit"></a>

```python
jit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls system-wide use of Just-in-Time Compilation (JIT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#jit ManagedDatabasePostgresql#jit}

---

##### `log_autovacuum_min_duration`<sup>Optional</sup> <a name="log_autovacuum_min_duration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logAutovacuumMinDuration"></a>

```python
log_autovacuum_min_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds.

Setting this to `0` logs all autovacuum actions. The default `-1` disables logging autovacuum actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#log_autovacuum_min_duration ManagedDatabasePostgresql#log_autovacuum_min_duration}

---

##### `log_error_verbosity`<sup>Optional</sup> <a name="log_error_verbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logErrorVerbosity"></a>

```python
log_error_verbosity: str
```

- *Type:* str

Controls the amount of detail written in the server log for each message that is logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#log_error_verbosity ManagedDatabasePostgresql#log_error_verbosity}

---

##### `log_line_prefix`<sup>Optional</sup> <a name="log_line_prefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logLinePrefix"></a>

```python
log_line_prefix: str
```

- *Type:* str

Choose from one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#log_line_prefix ManagedDatabasePostgresql#log_line_prefix}

---

##### `log_min_duration_statement`<sup>Optional</sup> <a name="log_min_duration_statement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logMinDurationStatement"></a>

```python
log_min_duration_statement: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Log statements that take more than this number of milliseconds to run, `-1` disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#log_min_duration_statement ManagedDatabasePostgresql#log_min_duration_statement}

---

##### `log_temp_files`<sup>Optional</sup> <a name="log_temp_files" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logTempFiles"></a>

```python
log_temp_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Log statements for each temporary file created larger than this number of kilobytes, -1 disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#log_temp_files ManagedDatabasePostgresql#log_temp_files}

---

##### `max_files_per_process`<sup>Optional</sup> <a name="max_files_per_process" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxFilesPerProcess"></a>

```python
max_files_per_process: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

PostgreSQL maximum number of files that can be open per process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_files_per_process ManagedDatabasePostgresql#max_files_per_process}

---

##### `max_locks_per_transaction`<sup>Optional</sup> <a name="max_locks_per_transaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLocksPerTransaction"></a>

```python
max_locks_per_transaction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

PostgreSQL maximum locks per transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_locks_per_transaction ManagedDatabasePostgresql#max_locks_per_transaction}

---

##### `max_logical_replication_workers`<sup>Optional</sup> <a name="max_logical_replication_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLogicalReplicationWorkers"></a>

```python
max_logical_replication_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

PostgreSQL maximum logical replication workers (taken from the pool of `max_parallel_workers`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_logical_replication_workers ManagedDatabasePostgresql#max_logical_replication_workers}

---

##### `max_parallel_workers`<sup>Optional</sup> <a name="max_parallel_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkers"></a>

```python
max_parallel_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the maximum number of workers that the system can support for parallel queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_parallel_workers ManagedDatabasePostgresql#max_parallel_workers}

---

##### `max_parallel_workers_per_gather`<sup>Optional</sup> <a name="max_parallel_workers_per_gather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkersPerGather"></a>

```python
max_parallel_workers_per_gather: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_parallel_workers_per_gather ManagedDatabasePostgresql#max_parallel_workers_per_gather}

---

##### `max_pred_locks_per_transaction`<sup>Optional</sup> <a name="max_pred_locks_per_transaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPredLocksPerTransaction"></a>

```python
max_pred_locks_per_transaction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

PostgreSQL maximum predicate locks per transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_pred_locks_per_transaction ManagedDatabasePostgresql#max_pred_locks_per_transaction}

---

##### `max_prepared_transactions`<sup>Optional</sup> <a name="max_prepared_transactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPreparedTransactions"></a>

```python
max_prepared_transactions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

PostgreSQL maximum prepared transactions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_prepared_transactions ManagedDatabasePostgresql#max_prepared_transactions}

---

##### `max_replication_slots`<sup>Optional</sup> <a name="max_replication_slots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxReplicationSlots"></a>

```python
max_replication_slots: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

PostgreSQL maximum replication slots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_replication_slots ManagedDatabasePostgresql#max_replication_slots}

---

##### `max_slot_wal_keep_size`<sup>Optional</sup> <a name="max_slot_wal_keep_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSlotWalKeepSize"></a>

```python
max_slot_wal_keep_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

PostgreSQL maximum WAL size (MB) reserved for replication slots.

Default is `-1` (unlimited). `wal_keep_size` minimum WAL size setting takes precedence over this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_slot_wal_keep_size ManagedDatabasePostgresql#max_slot_wal_keep_size}

---

##### `max_stack_depth`<sup>Optional</sup> <a name="max_stack_depth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStackDepth"></a>

```python
max_stack_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum depth of the stack in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_stack_depth ManagedDatabasePostgresql#max_stack_depth}

---

##### `max_standby_archive_delay`<sup>Optional</sup> <a name="max_standby_archive_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyArchiveDelay"></a>

```python
max_standby_archive_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max standby archive delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_standby_archive_delay ManagedDatabasePostgresql#max_standby_archive_delay}

---

##### `max_standby_streaming_delay`<sup>Optional</sup> <a name="max_standby_streaming_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyStreamingDelay"></a>

```python
max_standby_streaming_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max standby streaming delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_standby_streaming_delay ManagedDatabasePostgresql#max_standby_streaming_delay}

---

##### `max_wal_senders`<sup>Optional</sup> <a name="max_wal_senders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWalSenders"></a>

```python
max_wal_senders: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

PostgreSQL maximum WAL senders.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_wal_senders ManagedDatabasePostgresql#max_wal_senders}

---

##### `max_worker_processes`<sup>Optional</sup> <a name="max_worker_processes" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWorkerProcesses"></a>

```python
max_worker_processes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the maximum number of background processes that the system can support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_worker_processes ManagedDatabasePostgresql#max_worker_processes}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.migration"></a>

```python
migration: ManagedDatabasePostgresqlPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#migration ManagedDatabasePostgresql#migration}

---

##### `pgbouncer`<sup>Optional</sup> <a name="pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgbouncer"></a>

```python
pgbouncer: ManagedDatabasePostgresqlPropertiesPgbouncer
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pgbouncer ManagedDatabasePostgresql#pgbouncer}

---

##### `pglookout`<sup>Optional</sup> <a name="pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pglookout"></a>

```python
pglookout: ManagedDatabasePostgresqlPropertiesPglookout
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

pglookout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pglookout ManagedDatabasePostgresql#pglookout}

---

##### `pg_partman_bgw_interval`<sup>Optional</sup> <a name="pg_partman_bgw_interval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwInterval"></a>

```python
pg_partman_bgw_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the time interval to run pg_partman's scheduled tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_partman_bgw_interval ManagedDatabasePostgresql#pg_partman_bgw_interval}

---

##### `pg_partman_bgw_role`<sup>Optional</sup> <a name="pg_partman_bgw_role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwRole"></a>

```python
pg_partman_bgw_role: str
```

- *Type:* str

Controls which role to use for pg_partman's scheduled background tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_partman_bgw_role ManagedDatabasePostgresql#pg_partman_bgw_role}

---

##### `pg_read_replica`<sup>Optional</sup> <a name="pg_read_replica" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgReadReplica"></a>

```python
pg_read_replica: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the service which is being forked be a read replica (deprecated, use read_replica service integration instead).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_read_replica ManagedDatabasePostgresql#pg_read_replica}

---

##### `pg_service_to_fork_from`<sup>Optional</sup> <a name="pg_service_to_fork_from" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgServiceToForkFrom"></a>

```python
pg_service_to_fork_from: str
```

- *Type:* str

Name of the PG Service from which to fork (deprecated, use service_to_fork_from).

This has effect only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_service_to_fork_from ManagedDatabasePostgresql#pg_service_to_fork_from}

---

##### `pg_stat_monitor_enable`<sup>Optional</sup> <a name="pg_stat_monitor_enable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorEnable"></a>

```python
pg_stat_monitor_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the pg_stat_monitor extension.

Enabling this extension will cause the cluster to be restarted.When this extension is enabled, pg_stat_statements results for utility commands are unreliable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_stat_monitor_enable ManagedDatabasePostgresql#pg_stat_monitor_enable}

---

##### `pg_stat_monitor_pgsm_enable_query_plan`<sup>Optional</sup> <a name="pg_stat_monitor_pgsm_enable_query_plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmEnableQueryPlan"></a>

```python
pg_stat_monitor_pgsm_enable_query_plan: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables or disables query plan monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_enable_query_plan ManagedDatabasePostgresql#pg_stat_monitor_pgsm_enable_query_plan}

---

##### `pg_stat_monitor_pgsm_max_buckets`<sup>Optional</sup> <a name="pg_stat_monitor_pgsm_max_buckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmMaxBuckets"></a>

```python
pg_stat_monitor_pgsm_max_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the maximum number of buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_max_buckets ManagedDatabasePostgresql#pg_stat_monitor_pgsm_max_buckets}

---

##### `pg_stat_statements_track`<sup>Optional</sup> <a name="pg_stat_statements_track" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatStatementsTrack"></a>

```python
pg_stat_statements_track: str
```

- *Type:* str

Controls which statements are counted.

Specify top to track top-level statements (those issued directly by clients), all to also track nested statements (such as statements invoked within functions),
or none to disable statement statistics collection.The default value is `top`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#pg_stat_statements_track ManagedDatabasePostgresql#pg_stat_statements_track}

---

##### `public_access`<sup>Optional</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.publicAccess"></a>

```python
public_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Public access allows connections to your Managed Database services via the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#public_access ManagedDatabasePostgresql#public_access}

---

##### `shared_buffers_percentage`<sup>Optional</sup> <a name="shared_buffers_percentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.sharedBuffersPercentage"></a>

```python
shared_buffers_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percentage of total RAM that the database server uses for shared memory buffers.

Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the `shared_buffers` configuration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#shared_buffers_percentage ManagedDatabasePostgresql#shared_buffers_percentage}

---

##### `synchronous_replication`<sup>Optional</sup> <a name="synchronous_replication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.synchronousReplication"></a>

```python
synchronous_replication: str
```

- *Type:* str

Synchronous replication type. Note that the service plan also needs to support synchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#synchronous_replication ManagedDatabasePostgresql#synchronous_replication}

---

##### `temp_file_limit`<sup>Optional</sup> <a name="temp_file_limit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.tempFileLimit"></a>

```python
temp_file_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

PostgreSQL temporary file limit in KiB, -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#temp_file_limit ManagedDatabasePostgresql#temp_file_limit}

---

##### `timescaledb`<sup>Optional</sup> <a name="timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timescaledb"></a>

```python
timescaledb: ManagedDatabasePostgresqlPropertiesTimescaledb
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#timescaledb ManagedDatabasePostgresql#timescaledb}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#timezone ManagedDatabasePostgresql#timezone}

---

##### `track_activity_query_size`<sup>Optional</sup> <a name="track_activity_query_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackActivityQuerySize"></a>

```python
track_activity_query_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of bytes reserved to track the currently executing command for each active session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#track_activity_query_size ManagedDatabasePostgresql#track_activity_query_size}

---

##### `track_commit_timestamp`<sup>Optional</sup> <a name="track_commit_timestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackCommitTimestamp"></a>

```python
track_commit_timestamp: str
```

- *Type:* str

Record commit time of transactions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#track_commit_timestamp ManagedDatabasePostgresql#track_commit_timestamp}

---

##### `track_functions`<sup>Optional</sup> <a name="track_functions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackFunctions"></a>

```python
track_functions: str
```

- *Type:* str

Enables tracking of function call counts and time used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#track_functions ManagedDatabasePostgresql#track_functions}

---

##### `track_io_timing`<sup>Optional</sup> <a name="track_io_timing" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackIoTiming"></a>

```python
track_io_timing: str
```

- *Type:* str

Enables timing of database I/O calls.

This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#track_io_timing ManagedDatabasePostgresql#track_io_timing}

---

##### `variant`<sup>Optional</sup> <a name="variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.variant"></a>

```python
variant: str
```

- *Type:* str

Variant of the PostgreSQL service, may affect the features that are exposed by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#variant ManagedDatabasePostgresql#variant}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.version"></a>

```python
version: str
```

- *Type:* str

PostgreSQL major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#version ManagedDatabasePostgresql#version}

---

##### `wal_sender_timeout`<sup>Optional</sup> <a name="wal_sender_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walSenderTimeout"></a>

```python
wal_sender_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Terminate replication connections that are inactive for longer than this amount of time, in milliseconds.

Setting this value to `0` disables the timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#wal_sender_timeout ManagedDatabasePostgresql#wal_sender_timeout}

---

##### `wal_writer_delay`<sup>Optional</sup> <a name="wal_writer_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walWriterDelay"></a>

```python
wal_writer_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

WAL flush interval in milliseconds.

Note that setting this value to lower than the default `200`ms may negatively impact performance

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#wal_writer_delay ManagedDatabasePostgresql#wal_writer_delay}

---

##### `work_mem`<sup>Optional</sup> <a name="work_mem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.workMem"></a>

```python
work_mem: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files,  			in MB.

Default is 1MB + 0.075% of total RAM (up to 32MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#work_mem ManagedDatabasePostgresql#work_mem}

---

### ManagedDatabasePostgresqlPropertiesMigration <a name="ManagedDatabasePostgresqlPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration(
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
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.dbname">dbname</a></code> | <code>str</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.host">host</a></code> | <code>str</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreDbs">ignore_dbs</a></code> | <code>str</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.password">password</a></code> | <code>str</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.username">username</a></code> | <code>str</code> | User name for authentication with the server where to migrate data from. |

---

##### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.dbname"></a>

```python
dbname: str
```

- *Type:* str

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#dbname ManagedDatabasePostgresql#dbname}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.host"></a>

```python
host: str
```

- *Type:* str

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#host ManagedDatabasePostgresql#host}

---

##### `ignore_dbs`<sup>Optional</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreDbs"></a>

```python
ignore_dbs: str
```

- *Type:* str

Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#ignore_dbs ManagedDatabasePostgresql#ignore_dbs}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.password"></a>

```python
password: str
```

- *Type:* str

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#password ManagedDatabasePostgresql#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#port ManagedDatabasePostgresql#port}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#ssl ManagedDatabasePostgresql#ssl}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.username"></a>

```python
username: str
```

- *Type:* str

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#username ManagedDatabasePostgresql#username}

---

### ManagedDatabasePostgresqlPropertiesPgbouncer <a name="ManagedDatabasePostgresqlPropertiesPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer(
  autodb_idle_timeout: typing.Union[int, float] = None,
  autodb_max_db_connections: typing.Union[int, float] = None,
  autodb_pool_mode: str = None,
  autodb_pool_size: typing.Union[int, float] = None,
  ignore_startup_parameters: typing.List[str] = None,
  min_pool_size: typing.Union[int, float] = None,
  server_idle_timeout: typing.Union[int, float] = None,
  server_lifetime: typing.Union[int, float] = None,
  server_reset_query_always: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbIdleTimeout">autodb_idle_timeout</a></code> | <code>typing.Union[int, float]</code> | If the automatically created database pools have been unused this many seconds, they are freed. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbMaxDbConnections">autodb_max_db_connections</a></code> | <code>typing.Union[int, float]</code> | Do not allow more than this many server connections per database (regardless of user). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolMode">autodb_pool_mode</a></code> | <code>str</code> | PGBouncer pool mode. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolSize">autodb_pool_size</a></code> | <code>typing.Union[int, float]</code> | If non-zero then create automatically a pool of that size per user when a pool doesn't exist. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.ignoreStartupParameters">ignore_startup_parameters</a></code> | <code>typing.List[str]</code> | List of parameters to ignore when given in startup packet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.minPoolSize">min_pool_size</a></code> | <code>typing.Union[int, float]</code> | Add more server connections to pool if below this number. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverIdleTimeout">server_idle_timeout</a></code> | <code>typing.Union[int, float]</code> | If a server connection has been idle more than this many seconds it will be dropped. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverLifetime">server_lifetime</a></code> | <code>typing.Union[int, float]</code> | The pooler will close an unused server connection that has been connected longer than this. [seconds]. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverResetQueryAlways">server_reset_query_always</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Run server_reset_query (`DISCARD ALL`) in all pooling modes. |

---

##### `autodb_idle_timeout`<sup>Optional</sup> <a name="autodb_idle_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbIdleTimeout"></a>

```python
autodb_idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If the automatically created database pools have been unused this many seconds, they are freed.

If 0 then timeout is disabled. [seconds]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autodb_idle_timeout ManagedDatabasePostgresql#autodb_idle_timeout}

---

##### `autodb_max_db_connections`<sup>Optional</sup> <a name="autodb_max_db_connections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbMaxDbConnections"></a>

```python
autodb_max_db_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Do not allow more than this many server connections per database (regardless of user).

Setting it to 0 means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autodb_max_db_connections ManagedDatabasePostgresql#autodb_max_db_connections}

---

##### `autodb_pool_mode`<sup>Optional</sup> <a name="autodb_pool_mode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolMode"></a>

```python
autodb_pool_mode: str
```

- *Type:* str

PGBouncer pool mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autodb_pool_mode ManagedDatabasePostgresql#autodb_pool_mode}

---

##### `autodb_pool_size`<sup>Optional</sup> <a name="autodb_pool_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolSize"></a>

```python
autodb_pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If non-zero then create automatically a pool of that size per user when a pool doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autodb_pool_size ManagedDatabasePostgresql#autodb_pool_size}

---

##### `ignore_startup_parameters`<sup>Optional</sup> <a name="ignore_startup_parameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.ignoreStartupParameters"></a>

```python
ignore_startup_parameters: typing.List[str]
```

- *Type:* typing.List[str]

List of parameters to ignore when given in startup packet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#ignore_startup_parameters ManagedDatabasePostgresql#ignore_startup_parameters}

---

##### `min_pool_size`<sup>Optional</sup> <a name="min_pool_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.minPoolSize"></a>

```python
min_pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Add more server connections to pool if below this number.

Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#min_pool_size ManagedDatabasePostgresql#min_pool_size}

---

##### `server_idle_timeout`<sup>Optional</sup> <a name="server_idle_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverIdleTimeout"></a>

```python
server_idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a server connection has been idle more than this many seconds it will be dropped.

If 0 then timeout is disabled. [seconds]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#server_idle_timeout ManagedDatabasePostgresql#server_idle_timeout}

---

##### `server_lifetime`<sup>Optional</sup> <a name="server_lifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverLifetime"></a>

```python
server_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The pooler will close an unused server connection that has been connected longer than this. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#server_lifetime ManagedDatabasePostgresql#server_lifetime}

---

##### `server_reset_query_always`<sup>Optional</sup> <a name="server_reset_query_always" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverResetQueryAlways"></a>

```python
server_reset_query_always: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Run server_reset_query (`DISCARD ALL`) in all pooling modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#server_reset_query_always ManagedDatabasePostgresql#server_reset_query_always}

---

### ManagedDatabasePostgresqlPropertiesPglookout <a name="ManagedDatabasePostgresqlPropertiesPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout(
  max_failover_replication_time_lag: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.property.maxFailoverReplicationTimeLag">max_failover_replication_time_lag</a></code> | <code>typing.Union[int, float]</code> | Number of seconds of master unavailability before triggering database failover to standby. |

---

##### `max_failover_replication_time_lag`<sup>Optional</sup> <a name="max_failover_replication_time_lag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.property.maxFailoverReplicationTimeLag"></a>

```python
max_failover_replication_time_lag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds of master unavailability before triggering database failover to standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_failover_replication_time_lag ManagedDatabasePostgresql#max_failover_replication_time_lag}

---

### ManagedDatabasePostgresqlPropertiesTimescaledb <a name="ManagedDatabasePostgresqlPropertiesTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb(
  max_background_workers: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.property.maxBackgroundWorkers">max_background_workers</a></code> | <code>typing.Union[int, float]</code> | The number of background workers for timescaledb operations. |

---

##### `max_background_workers`<sup>Optional</sup> <a name="max_background_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.property.maxBackgroundWorkers"></a>

```python
max_background_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of background workers for timescaledb operations.

You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_background_workers ManagedDatabasePostgresql#max_background_workers}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabasePostgresqlComponentsList <a name="ManagedDatabasePostgresqlComponentsList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDatabasePostgresqlComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagedDatabasePostgresqlComponentsOutputReference <a name="ManagedDatabasePostgresqlComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.route">route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.usage">usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents">ManagedDatabasePostgresqlComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.route"></a>

```python
route: str
```

- *Type:* str

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.usage"></a>

```python
usage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabasePostgresqlComponents
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents">ManagedDatabasePostgresqlComponents</a>

---


### ManagedDatabasePostgresqlNodeStatesList <a name="ManagedDatabasePostgresqlNodeStatesList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDatabasePostgresqlNodeStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagedDatabasePostgresqlNodeStatesOutputReference <a name="ManagedDatabasePostgresqlNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates">ManagedDatabasePostgresqlNodeStates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabasePostgresqlNodeStates
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates">ManagedDatabasePostgresqlNodeStates</a>

---


### ManagedDatabasePostgresqlPropertiesMigrationOutputReference <a name="ManagedDatabasePostgresqlPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetDbname">reset_dbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreDbs">reset_ignore_dbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetSsl">reset_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dbname` <a name="reset_dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetDbname"></a>

```python
def reset_dbname() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_ignore_dbs` <a name="reset_ignore_dbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```python
def reset_ignore_dbs() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetSsl"></a>

```python
def reset_ssl() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbnameInput">dbname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbsInput">ignore_dbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.sslInput">ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbname">dbname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbs">ignore_dbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbname_input`<sup>Optional</sup> <a name="dbname_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbnameInput"></a>

```python
dbname_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `ignore_dbs_input`<sup>Optional</sup> <a name="ignore_dbs_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```python
ignore_dbs_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.sslInput"></a>

```python
ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `dbname`<sup>Required</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbname"></a>

```python
dbname: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ignore_dbs`<sup>Required</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```python
ignore_dbs: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabasePostgresqlPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---


### ManagedDatabasePostgresqlPropertiesOutputReference <a name="ManagedDatabasePostgresqlPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration">put_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer">put_pgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout">put_pglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb">put_timescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminUsername">reset_admin_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">reset_automatic_utility_network_ip_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeScaleFactor">reset_autovacuum_analyze_scale_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeThreshold">reset_autovacuum_analyze_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumFreezeMaxAge">reset_autovacuum_freeze_max_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumMaxWorkers">reset_autovacuum_max_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumNaptime">reset_autovacuum_naptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostDelay">reset_autovacuum_vacuum_cost_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostLimit">reset_autovacuum_vacuum_cost_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumScaleFactor">reset_autovacuum_vacuum_scale_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumThreshold">reset_autovacuum_vacuum_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupHour">reset_backup_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupMinute">reset_backup_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterDelay">reset_bgwriter_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterFlushAfter">reset_bgwriter_flush_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMaxpages">reset_bgwriter_lru_maxpages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMultiplier">reset_bgwriter_lru_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDeadlockTimeout">reset_deadlock_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDefaultToastCompression">reset_default_toast_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIdleInTransactionSessionTimeout">reset_idle_in_transaction_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIpFilter">reset_ip_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetJit">reset_jit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogAutovacuumMinDuration">reset_log_autovacuum_min_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogErrorVerbosity">reset_log_error_verbosity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogLinePrefix">reset_log_line_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogMinDurationStatement">reset_log_min_duration_statement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogTempFiles">reset_log_temp_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxFilesPerProcess">reset_max_files_per_process</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLocksPerTransaction">reset_max_locks_per_transaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLogicalReplicationWorkers">reset_max_logical_replication_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkers">reset_max_parallel_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkersPerGather">reset_max_parallel_workers_per_gather</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPredLocksPerTransaction">reset_max_pred_locks_per_transaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPreparedTransactions">reset_max_prepared_transactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxReplicationSlots">reset_max_replication_slots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxSlotWalKeepSize">reset_max_slot_wal_keep_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStackDepth">reset_max_stack_depth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyArchiveDelay">reset_max_standby_archive_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyStreamingDelay">reset_max_standby_streaming_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWalSenders">reset_max_wal_senders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWorkerProcesses">reset_max_worker_processes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMigration">reset_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgbouncer">reset_pgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPglookout">reset_pglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwInterval">reset_pg_partman_bgw_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwRole">reset_pg_partman_bgw_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgReadReplica">reset_pg_read_replica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgServiceToForkFrom">reset_pg_service_to_fork_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorEnable">reset_pg_stat_monitor_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmEnableQueryPlan">reset_pg_stat_monitor_pgsm_enable_query_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmMaxBuckets">reset_pg_stat_monitor_pgsm_max_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatStatementsTrack">reset_pg_stat_statements_track</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPublicAccess">reset_public_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSharedBuffersPercentage">reset_shared_buffers_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSynchronousReplication">reset_synchronous_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTempFileLimit">reset_temp_file_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimescaledb">reset_timescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackActivityQuerySize">reset_track_activity_query_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackCommitTimestamp">reset_track_commit_timestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackFunctions">reset_track_functions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackIoTiming">reset_track_io_timing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVariant">reset_variant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalSenderTimeout">reset_wal_sender_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalWriterDelay">reset_wal_writer_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWorkMem">reset_work_mem</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_migration` <a name="put_migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration"></a>

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

###### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration.parameter.dbname"></a>

- *Type:* str

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#dbname ManagedDatabasePostgresql#dbname}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration.parameter.host"></a>

- *Type:* str

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#host ManagedDatabasePostgresql#host}

---

###### `ignore_dbs`<sup>Optional</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration.parameter.ignoreDbs"></a>

- *Type:* str

Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#ignore_dbs ManagedDatabasePostgresql#ignore_dbs}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration.parameter.password"></a>

- *Type:* str

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#password ManagedDatabasePostgresql#password}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#port ManagedDatabasePostgresql#port}

---

###### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration.parameter.ssl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#ssl ManagedDatabasePostgresql#ssl}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration.parameter.username"></a>

- *Type:* str

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#username ManagedDatabasePostgresql#username}

---

##### `put_pgbouncer` <a name="put_pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer"></a>

```python
def put_pgbouncer(
  autodb_idle_timeout: typing.Union[int, float] = None,
  autodb_max_db_connections: typing.Union[int, float] = None,
  autodb_pool_mode: str = None,
  autodb_pool_size: typing.Union[int, float] = None,
  ignore_startup_parameters: typing.List[str] = None,
  min_pool_size: typing.Union[int, float] = None,
  server_idle_timeout: typing.Union[int, float] = None,
  server_lifetime: typing.Union[int, float] = None,
  server_reset_query_always: typing.Union[bool, IResolvable] = None
) -> None
```

###### `autodb_idle_timeout`<sup>Optional</sup> <a name="autodb_idle_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.autodbIdleTimeout"></a>

- *Type:* typing.Union[int, float]

If the automatically created database pools have been unused this many seconds, they are freed.

If 0 then timeout is disabled. [seconds]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autodb_idle_timeout ManagedDatabasePostgresql#autodb_idle_timeout}

---

###### `autodb_max_db_connections`<sup>Optional</sup> <a name="autodb_max_db_connections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.autodbMaxDbConnections"></a>

- *Type:* typing.Union[int, float]

Do not allow more than this many server connections per database (regardless of user).

Setting it to 0 means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autodb_max_db_connections ManagedDatabasePostgresql#autodb_max_db_connections}

---

###### `autodb_pool_mode`<sup>Optional</sup> <a name="autodb_pool_mode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.autodbPoolMode"></a>

- *Type:* str

PGBouncer pool mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autodb_pool_mode ManagedDatabasePostgresql#autodb_pool_mode}

---

###### `autodb_pool_size`<sup>Optional</sup> <a name="autodb_pool_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.autodbPoolSize"></a>

- *Type:* typing.Union[int, float]

If non-zero then create automatically a pool of that size per user when a pool doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#autodb_pool_size ManagedDatabasePostgresql#autodb_pool_size}

---

###### `ignore_startup_parameters`<sup>Optional</sup> <a name="ignore_startup_parameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.ignoreStartupParameters"></a>

- *Type:* typing.List[str]

List of parameters to ignore when given in startup packet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#ignore_startup_parameters ManagedDatabasePostgresql#ignore_startup_parameters}

---

###### `min_pool_size`<sup>Optional</sup> <a name="min_pool_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.minPoolSize"></a>

- *Type:* typing.Union[int, float]

Add more server connections to pool if below this number.

Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#min_pool_size ManagedDatabasePostgresql#min_pool_size}

---

###### `server_idle_timeout`<sup>Optional</sup> <a name="server_idle_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.serverIdleTimeout"></a>

- *Type:* typing.Union[int, float]

If a server connection has been idle more than this many seconds it will be dropped.

If 0 then timeout is disabled. [seconds]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#server_idle_timeout ManagedDatabasePostgresql#server_idle_timeout}

---

###### `server_lifetime`<sup>Optional</sup> <a name="server_lifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.serverLifetime"></a>

- *Type:* typing.Union[int, float]

The pooler will close an unused server connection that has been connected longer than this. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#server_lifetime ManagedDatabasePostgresql#server_lifetime}

---

###### `server_reset_query_always`<sup>Optional</sup> <a name="server_reset_query_always" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.serverResetQueryAlways"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Run server_reset_query (`DISCARD ALL`) in all pooling modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#server_reset_query_always ManagedDatabasePostgresql#server_reset_query_always}

---

##### `put_pglookout` <a name="put_pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout"></a>

```python
def put_pglookout(
  max_failover_replication_time_lag: typing.Union[int, float] = None
) -> None
```

###### `max_failover_replication_time_lag`<sup>Optional</sup> <a name="max_failover_replication_time_lag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout.parameter.maxFailoverReplicationTimeLag"></a>

- *Type:* typing.Union[int, float]

Number of seconds of master unavailability before triggering database failover to standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_failover_replication_time_lag ManagedDatabasePostgresql#max_failover_replication_time_lag}

---

##### `put_timescaledb` <a name="put_timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb"></a>

```python
def put_timescaledb(
  max_background_workers: typing.Union[int, float] = None
) -> None
```

###### `max_background_workers`<sup>Optional</sup> <a name="max_background_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb.parameter.maxBackgroundWorkers"></a>

- *Type:* typing.Union[int, float]

The number of background workers for timescaledb operations.

You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_postgresql#max_background_workers ManagedDatabasePostgresql#max_background_workers}

---

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_admin_username` <a name="reset_admin_username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminUsername"></a>

```python
def reset_admin_username() -> None
```

##### `reset_automatic_utility_network_ip_filter` <a name="reset_automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```python
def reset_automatic_utility_network_ip_filter() -> None
```

##### `reset_autovacuum_analyze_scale_factor` <a name="reset_autovacuum_analyze_scale_factor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeScaleFactor"></a>

```python
def reset_autovacuum_analyze_scale_factor() -> None
```

##### `reset_autovacuum_analyze_threshold` <a name="reset_autovacuum_analyze_threshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeThreshold"></a>

```python
def reset_autovacuum_analyze_threshold() -> None
```

##### `reset_autovacuum_freeze_max_age` <a name="reset_autovacuum_freeze_max_age" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumFreezeMaxAge"></a>

```python
def reset_autovacuum_freeze_max_age() -> None
```

##### `reset_autovacuum_max_workers` <a name="reset_autovacuum_max_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumMaxWorkers"></a>

```python
def reset_autovacuum_max_workers() -> None
```

##### `reset_autovacuum_naptime` <a name="reset_autovacuum_naptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumNaptime"></a>

```python
def reset_autovacuum_naptime() -> None
```

##### `reset_autovacuum_vacuum_cost_delay` <a name="reset_autovacuum_vacuum_cost_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostDelay"></a>

```python
def reset_autovacuum_vacuum_cost_delay() -> None
```

##### `reset_autovacuum_vacuum_cost_limit` <a name="reset_autovacuum_vacuum_cost_limit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostLimit"></a>

```python
def reset_autovacuum_vacuum_cost_limit() -> None
```

##### `reset_autovacuum_vacuum_scale_factor` <a name="reset_autovacuum_vacuum_scale_factor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumScaleFactor"></a>

```python
def reset_autovacuum_vacuum_scale_factor() -> None
```

##### `reset_autovacuum_vacuum_threshold` <a name="reset_autovacuum_vacuum_threshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumThreshold"></a>

```python
def reset_autovacuum_vacuum_threshold() -> None
```

##### `reset_backup_hour` <a name="reset_backup_hour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupHour"></a>

```python
def reset_backup_hour() -> None
```

##### `reset_backup_minute` <a name="reset_backup_minute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupMinute"></a>

```python
def reset_backup_minute() -> None
```

##### `reset_bgwriter_delay` <a name="reset_bgwriter_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterDelay"></a>

```python
def reset_bgwriter_delay() -> None
```

##### `reset_bgwriter_flush_after` <a name="reset_bgwriter_flush_after" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterFlushAfter"></a>

```python
def reset_bgwriter_flush_after() -> None
```

##### `reset_bgwriter_lru_maxpages` <a name="reset_bgwriter_lru_maxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMaxpages"></a>

```python
def reset_bgwriter_lru_maxpages() -> None
```

##### `reset_bgwriter_lru_multiplier` <a name="reset_bgwriter_lru_multiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMultiplier"></a>

```python
def reset_bgwriter_lru_multiplier() -> None
```

##### `reset_deadlock_timeout` <a name="reset_deadlock_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDeadlockTimeout"></a>

```python
def reset_deadlock_timeout() -> None
```

##### `reset_default_toast_compression` <a name="reset_default_toast_compression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDefaultToastCompression"></a>

```python
def reset_default_toast_compression() -> None
```

##### `reset_idle_in_transaction_session_timeout` <a name="reset_idle_in_transaction_session_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIdleInTransactionSessionTimeout"></a>

```python
def reset_idle_in_transaction_session_timeout() -> None
```

##### `reset_ip_filter` <a name="reset_ip_filter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIpFilter"></a>

```python
def reset_ip_filter() -> None
```

##### `reset_jit` <a name="reset_jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetJit"></a>

```python
def reset_jit() -> None
```

##### `reset_log_autovacuum_min_duration` <a name="reset_log_autovacuum_min_duration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogAutovacuumMinDuration"></a>

```python
def reset_log_autovacuum_min_duration() -> None
```

##### `reset_log_error_verbosity` <a name="reset_log_error_verbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogErrorVerbosity"></a>

```python
def reset_log_error_verbosity() -> None
```

##### `reset_log_line_prefix` <a name="reset_log_line_prefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogLinePrefix"></a>

```python
def reset_log_line_prefix() -> None
```

##### `reset_log_min_duration_statement` <a name="reset_log_min_duration_statement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogMinDurationStatement"></a>

```python
def reset_log_min_duration_statement() -> None
```

##### `reset_log_temp_files` <a name="reset_log_temp_files" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogTempFiles"></a>

```python
def reset_log_temp_files() -> None
```

##### `reset_max_files_per_process` <a name="reset_max_files_per_process" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxFilesPerProcess"></a>

```python
def reset_max_files_per_process() -> None
```

##### `reset_max_locks_per_transaction` <a name="reset_max_locks_per_transaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLocksPerTransaction"></a>

```python
def reset_max_locks_per_transaction() -> None
```

##### `reset_max_logical_replication_workers` <a name="reset_max_logical_replication_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLogicalReplicationWorkers"></a>

```python
def reset_max_logical_replication_workers() -> None
```

##### `reset_max_parallel_workers` <a name="reset_max_parallel_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkers"></a>

```python
def reset_max_parallel_workers() -> None
```

##### `reset_max_parallel_workers_per_gather` <a name="reset_max_parallel_workers_per_gather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkersPerGather"></a>

```python
def reset_max_parallel_workers_per_gather() -> None
```

##### `reset_max_pred_locks_per_transaction` <a name="reset_max_pred_locks_per_transaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPredLocksPerTransaction"></a>

```python
def reset_max_pred_locks_per_transaction() -> None
```

##### `reset_max_prepared_transactions` <a name="reset_max_prepared_transactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPreparedTransactions"></a>

```python
def reset_max_prepared_transactions() -> None
```

##### `reset_max_replication_slots` <a name="reset_max_replication_slots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxReplicationSlots"></a>

```python
def reset_max_replication_slots() -> None
```

##### `reset_max_slot_wal_keep_size` <a name="reset_max_slot_wal_keep_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxSlotWalKeepSize"></a>

```python
def reset_max_slot_wal_keep_size() -> None
```

##### `reset_max_stack_depth` <a name="reset_max_stack_depth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStackDepth"></a>

```python
def reset_max_stack_depth() -> None
```

##### `reset_max_standby_archive_delay` <a name="reset_max_standby_archive_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyArchiveDelay"></a>

```python
def reset_max_standby_archive_delay() -> None
```

##### `reset_max_standby_streaming_delay` <a name="reset_max_standby_streaming_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyStreamingDelay"></a>

```python
def reset_max_standby_streaming_delay() -> None
```

##### `reset_max_wal_senders` <a name="reset_max_wal_senders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWalSenders"></a>

```python
def reset_max_wal_senders() -> None
```

##### `reset_max_worker_processes` <a name="reset_max_worker_processes" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWorkerProcesses"></a>

```python
def reset_max_worker_processes() -> None
```

##### `reset_migration` <a name="reset_migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMigration"></a>

```python
def reset_migration() -> None
```

##### `reset_pgbouncer` <a name="reset_pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgbouncer"></a>

```python
def reset_pgbouncer() -> None
```

##### `reset_pglookout` <a name="reset_pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPglookout"></a>

```python
def reset_pglookout() -> None
```

##### `reset_pg_partman_bgw_interval` <a name="reset_pg_partman_bgw_interval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwInterval"></a>

```python
def reset_pg_partman_bgw_interval() -> None
```

##### `reset_pg_partman_bgw_role` <a name="reset_pg_partman_bgw_role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwRole"></a>

```python
def reset_pg_partman_bgw_role() -> None
```

##### `reset_pg_read_replica` <a name="reset_pg_read_replica" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgReadReplica"></a>

```python
def reset_pg_read_replica() -> None
```

##### `reset_pg_service_to_fork_from` <a name="reset_pg_service_to_fork_from" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgServiceToForkFrom"></a>

```python
def reset_pg_service_to_fork_from() -> None
```

##### `reset_pg_stat_monitor_enable` <a name="reset_pg_stat_monitor_enable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorEnable"></a>

```python
def reset_pg_stat_monitor_enable() -> None
```

##### `reset_pg_stat_monitor_pgsm_enable_query_plan` <a name="reset_pg_stat_monitor_pgsm_enable_query_plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmEnableQueryPlan"></a>

```python
def reset_pg_stat_monitor_pgsm_enable_query_plan() -> None
```

##### `reset_pg_stat_monitor_pgsm_max_buckets` <a name="reset_pg_stat_monitor_pgsm_max_buckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmMaxBuckets"></a>

```python
def reset_pg_stat_monitor_pgsm_max_buckets() -> None
```

##### `reset_pg_stat_statements_track` <a name="reset_pg_stat_statements_track" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatStatementsTrack"></a>

```python
def reset_pg_stat_statements_track() -> None
```

##### `reset_public_access` <a name="reset_public_access" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPublicAccess"></a>

```python
def reset_public_access() -> None
```

##### `reset_shared_buffers_percentage` <a name="reset_shared_buffers_percentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSharedBuffersPercentage"></a>

```python
def reset_shared_buffers_percentage() -> None
```

##### `reset_synchronous_replication` <a name="reset_synchronous_replication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSynchronousReplication"></a>

```python
def reset_synchronous_replication() -> None
```

##### `reset_temp_file_limit` <a name="reset_temp_file_limit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTempFileLimit"></a>

```python
def reset_temp_file_limit() -> None
```

##### `reset_timescaledb` <a name="reset_timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimescaledb"></a>

```python
def reset_timescaledb() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_track_activity_query_size` <a name="reset_track_activity_query_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackActivityQuerySize"></a>

```python
def reset_track_activity_query_size() -> None
```

##### `reset_track_commit_timestamp` <a name="reset_track_commit_timestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackCommitTimestamp"></a>

```python
def reset_track_commit_timestamp() -> None
```

##### `reset_track_functions` <a name="reset_track_functions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackFunctions"></a>

```python
def reset_track_functions() -> None
```

##### `reset_track_io_timing` <a name="reset_track_io_timing" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackIoTiming"></a>

```python
def reset_track_io_timing() -> None
```

##### `reset_variant` <a name="reset_variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVariant"></a>

```python
def reset_variant() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_wal_sender_timeout` <a name="reset_wal_sender_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalSenderTimeout"></a>

```python
def reset_wal_sender_timeout() -> None
```

##### `reset_wal_writer_delay` <a name="reset_wal_writer_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalWriterDelay"></a>

```python
def reset_wal_writer_delay() -> None
```

##### `reset_work_mem` <a name="reset_work_mem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWorkMem"></a>

```python
def reset_work_mem() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference">ManagedDatabasePostgresqlPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncer">pgbouncer</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference">ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookout">pglookout</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference">ManagedDatabasePostgresqlPropertiesPglookoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference">ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">automatic_utility_network_ip_filter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactorInput">autovacuum_analyze_scale_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThresholdInput">autovacuum_analyze_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAgeInput">autovacuum_freeze_max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkersInput">autovacuum_max_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptimeInput">autovacuum_naptime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelayInput">autovacuum_vacuum_cost_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimitInput">autovacuum_vacuum_cost_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactorInput">autovacuum_vacuum_scale_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThresholdInput">autovacuum_vacuum_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHourInput">backup_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinuteInput">backup_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelayInput">bgwriter_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfterInput">bgwriter_flush_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpagesInput">bgwriter_lru_maxpages_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplierInput">bgwriter_lru_multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeoutInput">deadlock_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompressionInput">default_toast_compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeoutInput">idle_in_transaction_session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilterInput">ip_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jitInput">jit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDurationInput">log_autovacuum_min_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosityInput">log_error_verbosity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefixInput">log_line_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatementInput">log_min_duration_statement_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFilesInput">log_temp_files_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcessInput">max_files_per_process_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransactionInput">max_locks_per_transaction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkersInput">max_logical_replication_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersInput">max_parallel_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGatherInput">max_parallel_workers_per_gather_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransactionInput">max_pred_locks_per_transaction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactionsInput">max_prepared_transactions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlotsInput">max_replication_slots_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSizeInput">max_slot_wal_keep_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepthInput">max_stack_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelayInput">max_standby_archive_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelayInput">max_standby_streaming_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSendersInput">max_wal_senders_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcessesInput">max_worker_processes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migrationInput">migration_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncerInput">pgbouncer_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookoutInput">pglookout_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwIntervalInput">pg_partman_bgw_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRoleInput">pg_partman_bgw_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgReadReplicaInput">pg_read_replica_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgServiceToForkFromInput">pg_service_to_fork_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnableInput">pg_stat_monitor_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlanInput">pg_stat_monitor_pgsm_enable_query_plan_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBucketsInput">pg_stat_monitor_pgsm_max_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrackInput">pg_stat_statements_track_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccessInput">public_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentageInput">shared_buffers_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplicationInput">synchronous_replication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimitInput">temp_file_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledbInput">timescaledb_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySizeInput">track_activity_query_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestampInput">track_commit_timestamp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctionsInput">track_functions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTimingInput">track_io_timing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variantInput">variant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeoutInput">wal_sender_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelayInput">wal_writer_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMemInput">work_mem_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">automatic_utility_network_ip_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactor">autovacuum_analyze_scale_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThreshold">autovacuum_analyze_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAge">autovacuum_freeze_max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkers">autovacuum_max_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptime">autovacuum_naptime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelay">autovacuum_vacuum_cost_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimit">autovacuum_vacuum_cost_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactor">autovacuum_vacuum_scale_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThreshold">autovacuum_vacuum_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelay">bgwriter_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfter">bgwriter_flush_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpages">bgwriter_lru_maxpages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplier">bgwriter_lru_multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeout">deadlock_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompression">default_toast_compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeout">idle_in_transaction_session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilter">ip_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jit">jit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDuration">log_autovacuum_min_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosity">log_error_verbosity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefix">log_line_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatement">log_min_duration_statement</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFiles">log_temp_files</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcess">max_files_per_process</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransaction">max_locks_per_transaction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkers">max_logical_replication_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkers">max_parallel_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGather">max_parallel_workers_per_gather</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransaction">max_pred_locks_per_transaction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactions">max_prepared_transactions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlots">max_replication_slots</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSize">max_slot_wal_keep_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepth">max_stack_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelay">max_standby_archive_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelay">max_standby_streaming_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSenders">max_wal_senders</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcesses">max_worker_processes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwInterval">pg_partman_bgw_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRole">pg_partman_bgw_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgReadReplica">pg_read_replica</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgServiceToForkFrom">pg_service_to_fork_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnable">pg_stat_monitor_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlan">pg_stat_monitor_pgsm_enable_query_plan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBuckets">pg_stat_monitor_pgsm_max_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrack">pg_stat_statements_track</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccess">public_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentage">shared_buffers_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplication">synchronous_replication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimit">temp_file_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySize">track_activity_query_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestamp">track_commit_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctions">track_functions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTiming">track_io_timing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variant">variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeout">wal_sender_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelay">wal_writer_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMem">work_mem</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migration"></a>

```python
migration: ManagedDatabasePostgresqlPropertiesMigrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference">ManagedDatabasePostgresqlPropertiesMigrationOutputReference</a>

---

##### `pgbouncer`<sup>Required</sup> <a name="pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncer"></a>

```python
pgbouncer: ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference">ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference</a>

---

##### `pglookout`<sup>Required</sup> <a name="pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookout"></a>

```python
pglookout: ManagedDatabasePostgresqlPropertiesPglookoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference">ManagedDatabasePostgresqlPropertiesPglookoutOutputReference</a>

---

##### `timescaledb`<sup>Required</sup> <a name="timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledb"></a>

```python
timescaledb: ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference">ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference</a>

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `automatic_utility_network_ip_filter_input`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```python
automatic_utility_network_ip_filter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autovacuum_analyze_scale_factor_input`<sup>Optional</sup> <a name="autovacuum_analyze_scale_factor_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactorInput"></a>

```python
autovacuum_analyze_scale_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_analyze_threshold_input`<sup>Optional</sup> <a name="autovacuum_analyze_threshold_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThresholdInput"></a>

```python
autovacuum_analyze_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_freeze_max_age_input`<sup>Optional</sup> <a name="autovacuum_freeze_max_age_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAgeInput"></a>

```python
autovacuum_freeze_max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_max_workers_input`<sup>Optional</sup> <a name="autovacuum_max_workers_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkersInput"></a>

```python
autovacuum_max_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_naptime_input`<sup>Optional</sup> <a name="autovacuum_naptime_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptimeInput"></a>

```python
autovacuum_naptime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_cost_delay_input`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_delay_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelayInput"></a>

```python
autovacuum_vacuum_cost_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_cost_limit_input`<sup>Optional</sup> <a name="autovacuum_vacuum_cost_limit_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimitInput"></a>

```python
autovacuum_vacuum_cost_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_scale_factor_input`<sup>Optional</sup> <a name="autovacuum_vacuum_scale_factor_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactorInput"></a>

```python
autovacuum_vacuum_scale_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_threshold_input`<sup>Optional</sup> <a name="autovacuum_vacuum_threshold_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThresholdInput"></a>

```python
autovacuum_vacuum_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_hour_input`<sup>Optional</sup> <a name="backup_hour_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHourInput"></a>

```python
backup_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_minute_input`<sup>Optional</sup> <a name="backup_minute_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinuteInput"></a>

```python
backup_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_delay_input`<sup>Optional</sup> <a name="bgwriter_delay_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelayInput"></a>

```python
bgwriter_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_flush_after_input`<sup>Optional</sup> <a name="bgwriter_flush_after_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfterInput"></a>

```python
bgwriter_flush_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_lru_maxpages_input`<sup>Optional</sup> <a name="bgwriter_lru_maxpages_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpagesInput"></a>

```python
bgwriter_lru_maxpages_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_lru_multiplier_input`<sup>Optional</sup> <a name="bgwriter_lru_multiplier_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplierInput"></a>

```python
bgwriter_lru_multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deadlock_timeout_input`<sup>Optional</sup> <a name="deadlock_timeout_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeoutInput"></a>

```python
deadlock_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_toast_compression_input`<sup>Optional</sup> <a name="default_toast_compression_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompressionInput"></a>

```python
default_toast_compression_input: str
```

- *Type:* str

---

##### `idle_in_transaction_session_timeout_input`<sup>Optional</sup> <a name="idle_in_transaction_session_timeout_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeoutInput"></a>

```python
idle_in_transaction_session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_filter_input`<sup>Optional</sup> <a name="ip_filter_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilterInput"></a>

```python
ip_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jit_input`<sup>Optional</sup> <a name="jit_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jitInput"></a>

```python
jit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_autovacuum_min_duration_input`<sup>Optional</sup> <a name="log_autovacuum_min_duration_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDurationInput"></a>

```python
log_autovacuum_min_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_error_verbosity_input`<sup>Optional</sup> <a name="log_error_verbosity_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosityInput"></a>

```python
log_error_verbosity_input: str
```

- *Type:* str

---

##### `log_line_prefix_input`<sup>Optional</sup> <a name="log_line_prefix_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefixInput"></a>

```python
log_line_prefix_input: str
```

- *Type:* str

---

##### `log_min_duration_statement_input`<sup>Optional</sup> <a name="log_min_duration_statement_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatementInput"></a>

```python
log_min_duration_statement_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_temp_files_input`<sup>Optional</sup> <a name="log_temp_files_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFilesInput"></a>

```python
log_temp_files_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_files_per_process_input`<sup>Optional</sup> <a name="max_files_per_process_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcessInput"></a>

```python
max_files_per_process_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_locks_per_transaction_input`<sup>Optional</sup> <a name="max_locks_per_transaction_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransactionInput"></a>

```python
max_locks_per_transaction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_logical_replication_workers_input`<sup>Optional</sup> <a name="max_logical_replication_workers_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkersInput"></a>

```python
max_logical_replication_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_parallel_workers_input`<sup>Optional</sup> <a name="max_parallel_workers_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersInput"></a>

```python
max_parallel_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_parallel_workers_per_gather_input`<sup>Optional</sup> <a name="max_parallel_workers_per_gather_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGatherInput"></a>

```python
max_parallel_workers_per_gather_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pred_locks_per_transaction_input`<sup>Optional</sup> <a name="max_pred_locks_per_transaction_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransactionInput"></a>

```python
max_pred_locks_per_transaction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_prepared_transactions_input`<sup>Optional</sup> <a name="max_prepared_transactions_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactionsInput"></a>

```python
max_prepared_transactions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_replication_slots_input`<sup>Optional</sup> <a name="max_replication_slots_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlotsInput"></a>

```python
max_replication_slots_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_slot_wal_keep_size_input`<sup>Optional</sup> <a name="max_slot_wal_keep_size_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSizeInput"></a>

```python
max_slot_wal_keep_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stack_depth_input`<sup>Optional</sup> <a name="max_stack_depth_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepthInput"></a>

```python
max_stack_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_standby_archive_delay_input`<sup>Optional</sup> <a name="max_standby_archive_delay_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelayInput"></a>

```python
max_standby_archive_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_standby_streaming_delay_input`<sup>Optional</sup> <a name="max_standby_streaming_delay_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelayInput"></a>

```python
max_standby_streaming_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_wal_senders_input`<sup>Optional</sup> <a name="max_wal_senders_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSendersInput"></a>

```python
max_wal_senders_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_worker_processes_input`<sup>Optional</sup> <a name="max_worker_processes_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcessesInput"></a>

```python
max_worker_processes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `migration_input`<sup>Optional</sup> <a name="migration_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migrationInput"></a>

```python
migration_input: ManagedDatabasePostgresqlPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---

##### `pgbouncer_input`<sup>Optional</sup> <a name="pgbouncer_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncerInput"></a>

```python
pgbouncer_input: ManagedDatabasePostgresqlPropertiesPgbouncer
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---

##### `pglookout_input`<sup>Optional</sup> <a name="pglookout_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookoutInput"></a>

```python
pglookout_input: ManagedDatabasePostgresqlPropertiesPglookout
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---

##### `pg_partman_bgw_interval_input`<sup>Optional</sup> <a name="pg_partman_bgw_interval_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwIntervalInput"></a>

```python
pg_partman_bgw_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pg_partman_bgw_role_input`<sup>Optional</sup> <a name="pg_partman_bgw_role_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRoleInput"></a>

```python
pg_partman_bgw_role_input: str
```

- *Type:* str

---

##### `pg_read_replica_input`<sup>Optional</sup> <a name="pg_read_replica_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgReadReplicaInput"></a>

```python
pg_read_replica_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pg_service_to_fork_from_input`<sup>Optional</sup> <a name="pg_service_to_fork_from_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgServiceToForkFromInput"></a>

```python
pg_service_to_fork_from_input: str
```

- *Type:* str

---

##### `pg_stat_monitor_enable_input`<sup>Optional</sup> <a name="pg_stat_monitor_enable_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnableInput"></a>

```python
pg_stat_monitor_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pg_stat_monitor_pgsm_enable_query_plan_input`<sup>Optional</sup> <a name="pg_stat_monitor_pgsm_enable_query_plan_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlanInput"></a>

```python
pg_stat_monitor_pgsm_enable_query_plan_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pg_stat_monitor_pgsm_max_buckets_input`<sup>Optional</sup> <a name="pg_stat_monitor_pgsm_max_buckets_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBucketsInput"></a>

```python
pg_stat_monitor_pgsm_max_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pg_stat_statements_track_input`<sup>Optional</sup> <a name="pg_stat_statements_track_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrackInput"></a>

```python
pg_stat_statements_track_input: str
```

- *Type:* str

---

##### `public_access_input`<sup>Optional</sup> <a name="public_access_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccessInput"></a>

```python
public_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_buffers_percentage_input`<sup>Optional</sup> <a name="shared_buffers_percentage_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentageInput"></a>

```python
shared_buffers_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `synchronous_replication_input`<sup>Optional</sup> <a name="synchronous_replication_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplicationInput"></a>

```python
synchronous_replication_input: str
```

- *Type:* str

---

##### `temp_file_limit_input`<sup>Optional</sup> <a name="temp_file_limit_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimitInput"></a>

```python
temp_file_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timescaledb_input`<sup>Optional</sup> <a name="timescaledb_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledbInput"></a>

```python
timescaledb_input: ManagedDatabasePostgresqlPropertiesTimescaledb
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `track_activity_query_size_input`<sup>Optional</sup> <a name="track_activity_query_size_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySizeInput"></a>

```python
track_activity_query_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `track_commit_timestamp_input`<sup>Optional</sup> <a name="track_commit_timestamp_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestampInput"></a>

```python
track_commit_timestamp_input: str
```

- *Type:* str

---

##### `track_functions_input`<sup>Optional</sup> <a name="track_functions_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctionsInput"></a>

```python
track_functions_input: str
```

- *Type:* str

---

##### `track_io_timing_input`<sup>Optional</sup> <a name="track_io_timing_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTimingInput"></a>

```python
track_io_timing_input: str
```

- *Type:* str

---

##### `variant_input`<sup>Optional</sup> <a name="variant_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variantInput"></a>

```python
variant_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `wal_sender_timeout_input`<sup>Optional</sup> <a name="wal_sender_timeout_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeoutInput"></a>

```python
wal_sender_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wal_writer_delay_input`<sup>Optional</sup> <a name="wal_writer_delay_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelayInput"></a>

```python
wal_writer_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_mem_input`<sup>Optional</sup> <a name="work_mem_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMemInput"></a>

```python
work_mem_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `automatic_utility_network_ip_filter`<sup>Required</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```python
automatic_utility_network_ip_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autovacuum_analyze_scale_factor`<sup>Required</sup> <a name="autovacuum_analyze_scale_factor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactor"></a>

```python
autovacuum_analyze_scale_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_analyze_threshold`<sup>Required</sup> <a name="autovacuum_analyze_threshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThreshold"></a>

```python
autovacuum_analyze_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_freeze_max_age`<sup>Required</sup> <a name="autovacuum_freeze_max_age" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAge"></a>

```python
autovacuum_freeze_max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_max_workers`<sup>Required</sup> <a name="autovacuum_max_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkers"></a>

```python
autovacuum_max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_naptime`<sup>Required</sup> <a name="autovacuum_naptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptime"></a>

```python
autovacuum_naptime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_cost_delay`<sup>Required</sup> <a name="autovacuum_vacuum_cost_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelay"></a>

```python
autovacuum_vacuum_cost_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_cost_limit`<sup>Required</sup> <a name="autovacuum_vacuum_cost_limit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimit"></a>

```python
autovacuum_vacuum_cost_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_scale_factor`<sup>Required</sup> <a name="autovacuum_vacuum_scale_factor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactor"></a>

```python
autovacuum_vacuum_scale_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autovacuum_vacuum_threshold`<sup>Required</sup> <a name="autovacuum_vacuum_threshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThreshold"></a>

```python
autovacuum_vacuum_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_hour`<sup>Required</sup> <a name="backup_hour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHour"></a>

```python
backup_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_minute`<sup>Required</sup> <a name="backup_minute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinute"></a>

```python
backup_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_delay`<sup>Required</sup> <a name="bgwriter_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelay"></a>

```python
bgwriter_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_flush_after`<sup>Required</sup> <a name="bgwriter_flush_after" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfter"></a>

```python
bgwriter_flush_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_lru_maxpages`<sup>Required</sup> <a name="bgwriter_lru_maxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpages"></a>

```python
bgwriter_lru_maxpages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgwriter_lru_multiplier`<sup>Required</sup> <a name="bgwriter_lru_multiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplier"></a>

```python
bgwriter_lru_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deadlock_timeout`<sup>Required</sup> <a name="deadlock_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeout"></a>

```python
deadlock_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_toast_compression`<sup>Required</sup> <a name="default_toast_compression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompression"></a>

```python
default_toast_compression: str
```

- *Type:* str

---

##### `idle_in_transaction_session_timeout`<sup>Required</sup> <a name="idle_in_transaction_session_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeout"></a>

```python
idle_in_transaction_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_filter`<sup>Required</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilter"></a>

```python
ip_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jit`<sup>Required</sup> <a name="jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jit"></a>

```python
jit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_autovacuum_min_duration`<sup>Required</sup> <a name="log_autovacuum_min_duration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDuration"></a>

```python
log_autovacuum_min_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_error_verbosity`<sup>Required</sup> <a name="log_error_verbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosity"></a>

```python
log_error_verbosity: str
```

- *Type:* str

---

##### `log_line_prefix`<sup>Required</sup> <a name="log_line_prefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefix"></a>

```python
log_line_prefix: str
```

- *Type:* str

---

##### `log_min_duration_statement`<sup>Required</sup> <a name="log_min_duration_statement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatement"></a>

```python
log_min_duration_statement: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_temp_files`<sup>Required</sup> <a name="log_temp_files" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFiles"></a>

```python
log_temp_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_files_per_process`<sup>Required</sup> <a name="max_files_per_process" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcess"></a>

```python
max_files_per_process: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_locks_per_transaction`<sup>Required</sup> <a name="max_locks_per_transaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransaction"></a>

```python
max_locks_per_transaction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_logical_replication_workers`<sup>Required</sup> <a name="max_logical_replication_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkers"></a>

```python
max_logical_replication_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_parallel_workers`<sup>Required</sup> <a name="max_parallel_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkers"></a>

```python
max_parallel_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_parallel_workers_per_gather`<sup>Required</sup> <a name="max_parallel_workers_per_gather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGather"></a>

```python
max_parallel_workers_per_gather: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pred_locks_per_transaction`<sup>Required</sup> <a name="max_pred_locks_per_transaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransaction"></a>

```python
max_pred_locks_per_transaction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_prepared_transactions`<sup>Required</sup> <a name="max_prepared_transactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactions"></a>

```python
max_prepared_transactions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_replication_slots`<sup>Required</sup> <a name="max_replication_slots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlots"></a>

```python
max_replication_slots: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_slot_wal_keep_size`<sup>Required</sup> <a name="max_slot_wal_keep_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSize"></a>

```python
max_slot_wal_keep_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stack_depth`<sup>Required</sup> <a name="max_stack_depth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepth"></a>

```python
max_stack_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_standby_archive_delay`<sup>Required</sup> <a name="max_standby_archive_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelay"></a>

```python
max_standby_archive_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_standby_streaming_delay`<sup>Required</sup> <a name="max_standby_streaming_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelay"></a>

```python
max_standby_streaming_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_wal_senders`<sup>Required</sup> <a name="max_wal_senders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSenders"></a>

```python
max_wal_senders: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_worker_processes`<sup>Required</sup> <a name="max_worker_processes" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcesses"></a>

```python
max_worker_processes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pg_partman_bgw_interval`<sup>Required</sup> <a name="pg_partman_bgw_interval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwInterval"></a>

```python
pg_partman_bgw_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pg_partman_bgw_role`<sup>Required</sup> <a name="pg_partman_bgw_role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRole"></a>

```python
pg_partman_bgw_role: str
```

- *Type:* str

---

##### `pg_read_replica`<sup>Required</sup> <a name="pg_read_replica" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgReadReplica"></a>

```python
pg_read_replica: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pg_service_to_fork_from`<sup>Required</sup> <a name="pg_service_to_fork_from" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgServiceToForkFrom"></a>

```python
pg_service_to_fork_from: str
```

- *Type:* str

---

##### `pg_stat_monitor_enable`<sup>Required</sup> <a name="pg_stat_monitor_enable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnable"></a>

```python
pg_stat_monitor_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pg_stat_monitor_pgsm_enable_query_plan`<sup>Required</sup> <a name="pg_stat_monitor_pgsm_enable_query_plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlan"></a>

```python
pg_stat_monitor_pgsm_enable_query_plan: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pg_stat_monitor_pgsm_max_buckets`<sup>Required</sup> <a name="pg_stat_monitor_pgsm_max_buckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBuckets"></a>

```python
pg_stat_monitor_pgsm_max_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pg_stat_statements_track`<sup>Required</sup> <a name="pg_stat_statements_track" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrack"></a>

```python
pg_stat_statements_track: str
```

- *Type:* str

---

##### `public_access`<sup>Required</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccess"></a>

```python
public_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_buffers_percentage`<sup>Required</sup> <a name="shared_buffers_percentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentage"></a>

```python
shared_buffers_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `synchronous_replication`<sup>Required</sup> <a name="synchronous_replication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplication"></a>

```python
synchronous_replication: str
```

- *Type:* str

---

##### `temp_file_limit`<sup>Required</sup> <a name="temp_file_limit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimit"></a>

```python
temp_file_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `track_activity_query_size`<sup>Required</sup> <a name="track_activity_query_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySize"></a>

```python
track_activity_query_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `track_commit_timestamp`<sup>Required</sup> <a name="track_commit_timestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestamp"></a>

```python
track_commit_timestamp: str
```

- *Type:* str

---

##### `track_functions`<sup>Required</sup> <a name="track_functions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctions"></a>

```python
track_functions: str
```

- *Type:* str

---

##### `track_io_timing`<sup>Required</sup> <a name="track_io_timing" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTiming"></a>

```python
track_io_timing: str
```

- *Type:* str

---

##### `variant`<sup>Required</sup> <a name="variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variant"></a>

```python
variant: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `wal_sender_timeout`<sup>Required</sup> <a name="wal_sender_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeout"></a>

```python
wal_sender_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wal_writer_delay`<sup>Required</sup> <a name="wal_writer_delay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelay"></a>

```python
wal_writer_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_mem`<sup>Required</sup> <a name="work_mem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMem"></a>

```python
work_mem: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabasePostgresqlProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---


### ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference <a name="ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbIdleTimeout">reset_autodb_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbMaxDbConnections">reset_autodb_max_db_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolMode">reset_autodb_pool_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolSize">reset_autodb_pool_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetIgnoreStartupParameters">reset_ignore_startup_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMinPoolSize">reset_min_pool_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerIdleTimeout">reset_server_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerLifetime">reset_server_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerResetQueryAlways">reset_server_reset_query_always</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_autodb_idle_timeout` <a name="reset_autodb_idle_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbIdleTimeout"></a>

```python
def reset_autodb_idle_timeout() -> None
```

##### `reset_autodb_max_db_connections` <a name="reset_autodb_max_db_connections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbMaxDbConnections"></a>

```python
def reset_autodb_max_db_connections() -> None
```

##### `reset_autodb_pool_mode` <a name="reset_autodb_pool_mode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolMode"></a>

```python
def reset_autodb_pool_mode() -> None
```

##### `reset_autodb_pool_size` <a name="reset_autodb_pool_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolSize"></a>

```python
def reset_autodb_pool_size() -> None
```

##### `reset_ignore_startup_parameters` <a name="reset_ignore_startup_parameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetIgnoreStartupParameters"></a>

```python
def reset_ignore_startup_parameters() -> None
```

##### `reset_min_pool_size` <a name="reset_min_pool_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMinPoolSize"></a>

```python
def reset_min_pool_size() -> None
```

##### `reset_server_idle_timeout` <a name="reset_server_idle_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerIdleTimeout"></a>

```python
def reset_server_idle_timeout() -> None
```

##### `reset_server_lifetime` <a name="reset_server_lifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerLifetime"></a>

```python
def reset_server_lifetime() -> None
```

##### `reset_server_reset_query_always` <a name="reset_server_reset_query_always" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerResetQueryAlways"></a>

```python
def reset_server_reset_query_always() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeoutInput">autodb_idle_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnectionsInput">autodb_max_db_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolModeInput">autodb_pool_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSizeInput">autodb_pool_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParametersInput">ignore_startup_parameters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSizeInput">min_pool_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeoutInput">server_idle_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetimeInput">server_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlwaysInput">server_reset_query_always_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeout">autodb_idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnections">autodb_max_db_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolMode">autodb_pool_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSize">autodb_pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParameters">ignore_startup_parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSize">min_pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeout">server_idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetime">server_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlways">server_reset_query_always</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autodb_idle_timeout_input`<sup>Optional</sup> <a name="autodb_idle_timeout_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeoutInput"></a>

```python
autodb_idle_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autodb_max_db_connections_input`<sup>Optional</sup> <a name="autodb_max_db_connections_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnectionsInput"></a>

```python
autodb_max_db_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autodb_pool_mode_input`<sup>Optional</sup> <a name="autodb_pool_mode_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolModeInput"></a>

```python
autodb_pool_mode_input: str
```

- *Type:* str

---

##### `autodb_pool_size_input`<sup>Optional</sup> <a name="autodb_pool_size_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSizeInput"></a>

```python
autodb_pool_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_startup_parameters_input`<sup>Optional</sup> <a name="ignore_startup_parameters_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParametersInput"></a>

```python
ignore_startup_parameters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `min_pool_size_input`<sup>Optional</sup> <a name="min_pool_size_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSizeInput"></a>

```python
min_pool_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_idle_timeout_input`<sup>Optional</sup> <a name="server_idle_timeout_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeoutInput"></a>

```python
server_idle_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_lifetime_input`<sup>Optional</sup> <a name="server_lifetime_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetimeInput"></a>

```python
server_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_reset_query_always_input`<sup>Optional</sup> <a name="server_reset_query_always_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlwaysInput"></a>

```python
server_reset_query_always_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autodb_idle_timeout`<sup>Required</sup> <a name="autodb_idle_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeout"></a>

```python
autodb_idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autodb_max_db_connections`<sup>Required</sup> <a name="autodb_max_db_connections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnections"></a>

```python
autodb_max_db_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autodb_pool_mode`<sup>Required</sup> <a name="autodb_pool_mode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolMode"></a>

```python
autodb_pool_mode: str
```

- *Type:* str

---

##### `autodb_pool_size`<sup>Required</sup> <a name="autodb_pool_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSize"></a>

```python
autodb_pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_startup_parameters`<sup>Required</sup> <a name="ignore_startup_parameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParameters"></a>

```python
ignore_startup_parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `min_pool_size`<sup>Required</sup> <a name="min_pool_size" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSize"></a>

```python
min_pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_idle_timeout`<sup>Required</sup> <a name="server_idle_timeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeout"></a>

```python
server_idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_lifetime`<sup>Required</sup> <a name="server_lifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetime"></a>

```python
server_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_reset_query_always`<sup>Required</sup> <a name="server_reset_query_always" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlways"></a>

```python
server_reset_query_always: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabasePostgresqlPropertiesPgbouncer
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---


### ManagedDatabasePostgresqlPropertiesPglookoutOutputReference <a name="ManagedDatabasePostgresqlPropertiesPglookoutOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resetMaxFailoverReplicationTimeLag">reset_max_failover_replication_time_lag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_failover_replication_time_lag` <a name="reset_max_failover_replication_time_lag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resetMaxFailoverReplicationTimeLag"></a>

```python
def reset_max_failover_replication_time_lag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLagInput">max_failover_replication_time_lag_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLag">max_failover_replication_time_lag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_failover_replication_time_lag_input`<sup>Optional</sup> <a name="max_failover_replication_time_lag_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLagInput"></a>

```python
max_failover_replication_time_lag_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failover_replication_time_lag`<sup>Required</sup> <a name="max_failover_replication_time_lag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLag"></a>

```python
max_failover_replication_time_lag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabasePostgresqlPropertiesPglookout
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---


### ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference <a name="ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_postgresql

managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resetMaxBackgroundWorkers">reset_max_background_workers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_background_workers` <a name="reset_max_background_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resetMaxBackgroundWorkers"></a>

```python
def reset_max_background_workers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkersInput">max_background_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkers">max_background_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_background_workers_input`<sup>Optional</sup> <a name="max_background_workers_input" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkersInput"></a>

```python
max_background_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_background_workers`<sup>Required</sup> <a name="max_background_workers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkers"></a>

```python
max_background_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabasePostgresqlPropertiesTimescaledb
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---



