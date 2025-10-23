# `managedDatabaseMysql` Submodule <a name="`managedDatabaseMysql` Submodule" id="@cdktf/provider-upcloud.managedDatabaseMysql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseMysql <a name="ManagedDatabaseMysql" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql upcloud_managed_database_mysql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysql(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  plan: str,
  title: str,
  zone: str,
  additional_disk_space_gib: typing.Union[int, float] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  maintenance_window_dow: str = None,
  maintenance_window_time: str = None,
  network: IResolvable | typing.List[ManagedDatabaseMysqlNetwork] = None,
  powered: bool | IResolvable = None,
  properties: ManagedDatabaseMysqlProperties = None,
  termination_protection: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.plan">plan</a></code> | <code>str</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.title">title</a></code> | <code>str</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.additionalDiskSpaceGib">additional_disk_space_gib</a></code> | <code>typing.Union[int, float]</code> | Additional disk space in GiB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#id ManagedDatabaseMysql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.network">network</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>]</code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.powered">powered</a></code> | <code>bool \| cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.terminationProtection">termination_protection</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.name"></a>

- *Type:* str

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#name ManagedDatabaseMysql#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.plan"></a>

- *Type:* str

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans mysql`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#plan ManagedDatabaseMysql#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.title"></a>

- *Type:* str

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#title ManagedDatabaseMysql#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.zone"></a>

- *Type:* str

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#zone ManagedDatabaseMysql#zone}

---

##### `additional_disk_space_gib`<sup>Optional</sup> <a name="additional_disk_space_gib" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.additionalDiskSpaceGib"></a>

- *Type:* typing.Union[int, float]

Additional disk space in GiB.

Note that changes in additional disk space might require disk maintenance. This pending maintenance blocks some operations, such as version upgrades, until the maintenance is completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#additional_disk_space_gib ManagedDatabaseMysql#additional_disk_space_gib}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#id ManagedDatabaseMysql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#labels ManagedDatabaseMysql#labels}

---

##### `maintenance_window_dow`<sup>Optional</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.maintenanceWindowDow"></a>

- *Type:* str

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#maintenance_window_dow ManagedDatabaseMysql#maintenance_window_dow}

---

##### `maintenance_window_time`<sup>Optional</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.maintenanceWindowTime"></a>

- *Type:* str

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#maintenance_window_time ManagedDatabaseMysql#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.network"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#network ManagedDatabaseMysql#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.powered"></a>

- *Type:* bool | cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#powered ManagedDatabaseMysql#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#properties ManagedDatabaseMysql#properties}

---

##### `termination_protection`<sup>Optional</sup> <a name="termination_protection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.terminationProtection"></a>

- *Type:* bool | cdktf.IResolvable

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#termination_protection ManagedDatabaseMysql#termination_protection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetAdditionalDiskSpaceGib">reset_additional_disk_space_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowDow">reset_maintenance_window_dow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowTime">reset_maintenance_window_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetPowered">reset_powered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetTerminationProtection">reset_termination_protection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_network` <a name="put_network" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putNetwork"></a>

```python
def put_network(
  value: IResolvable | typing.List[ManagedDatabaseMysqlNetwork]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>]

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties"></a>

```python
def put_properties(
  admin_password: str = None,
  admin_username: str = None,
  automatic_utility_network_ip_filter: bool | IResolvable = None,
  backup_hour: typing.Union[int, float] = None,
  backup_minute: typing.Union[int, float] = None,
  binlog_retention_period: typing.Union[int, float] = None,
  connect_timeout: typing.Union[int, float] = None,
  default_time_zone: str = None,
  group_concat_max_len: typing.Union[int, float] = None,
  information_schema_stats_expiry: typing.Union[int, float] = None,
  innodb_change_buffer_max_size: typing.Union[int, float] = None,
  innodb_flush_neighbors: typing.Union[int, float] = None,
  innodb_ft_min_token_size: typing.Union[int, float] = None,
  innodb_ft_server_stopword_table: str = None,
  innodb_lock_wait_timeout: typing.Union[int, float] = None,
  innodb_log_buffer_size: typing.Union[int, float] = None,
  innodb_online_alter_log_max_size: typing.Union[int, float] = None,
  innodb_print_all_deadlocks: bool | IResolvable = None,
  innodb_read_io_threads: typing.Union[int, float] = None,
  innodb_rollback_on_timeout: bool | IResolvable = None,
  innodb_thread_concurrency: typing.Union[int, float] = None,
  innodb_write_io_threads: typing.Union[int, float] = None,
  interactive_timeout: typing.Union[int, float] = None,
  internal_tmp_mem_storage_engine: str = None,
  ip_filter: typing.List[str] = None,
  log_output: str = None,
  long_query_time: typing.Union[int, float] = None,
  max_allowed_packet: typing.Union[int, float] = None,
  max_heap_table_size: typing.Union[int, float] = None,
  migration: ManagedDatabaseMysqlPropertiesMigration = None,
  mysql_incremental_backup: ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup = None,
  net_buffer_length: typing.Union[int, float] = None,
  net_read_timeout: typing.Union[int, float] = None,
  net_write_timeout: typing.Union[int, float] = None,
  public_access: bool | IResolvable = None,
  service_log: bool | IResolvable = None,
  slow_query_log: bool | IResolvable = None,
  sort_buffer_size: typing.Union[int, float] = None,
  sql_mode: str = None,
  sql_require_primary_key: bool | IResolvable = None,
  tmp_table_size: typing.Union[int, float] = None,
  version: str = None,
  wait_timeout: typing.Union[int, float] = None
) -> None
```

###### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.adminPassword"></a>

- *Type:* str

Custom password for admin user.

Defaults to random string. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#admin_password ManagedDatabaseMysql#admin_password}

---

###### `admin_username`<sup>Optional</sup> <a name="admin_username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.adminUsername"></a>

- *Type:* str

Custom username for admin user. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#admin_username ManagedDatabaseMysql#admin_username}

---

###### `automatic_utility_network_ip_filter`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.automaticUtilityNetworkIpFilter"></a>

- *Type:* bool | cdktf.IResolvable

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#automatic_utility_network_ip_filter ManagedDatabaseMysql#automatic_utility_network_ip_filter}

---

###### `backup_hour`<sup>Optional</sup> <a name="backup_hour" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.backupHour"></a>

- *Type:* typing.Union[int, float]

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#backup_hour ManagedDatabaseMysql#backup_hour}

---

###### `backup_minute`<sup>Optional</sup> <a name="backup_minute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.backupMinute"></a>

- *Type:* typing.Union[int, float]

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#backup_minute ManagedDatabaseMysql#backup_minute}

---

###### `binlog_retention_period`<sup>Optional</sup> <a name="binlog_retention_period" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.binlogRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The minimum amount of time in seconds to keep binlog entries before deletion.

This may be extended for services that require binlog entries for longer than the default for example if using the MySQL Debezium Kafka connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#binlog_retention_period ManagedDatabaseMysql#binlog_retention_period}

---

###### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.connectTimeout"></a>

- *Type:* typing.Union[int, float]

The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#connect_timeout ManagedDatabaseMysql#connect_timeout}

---

###### `default_time_zone`<sup>Optional</sup> <a name="default_time_zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.defaultTimeZone"></a>

- *Type:* str

Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#default_time_zone ManagedDatabaseMysql#default_time_zone}

---

###### `group_concat_max_len`<sup>Optional</sup> <a name="group_concat_max_len" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.groupConcatMaxLen"></a>

- *Type:* typing.Union[int, float]

The maximum permitted result length in bytes for the GROUP_CONCAT() function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#group_concat_max_len ManagedDatabaseMysql#group_concat_max_len}

---

###### `information_schema_stats_expiry`<sup>Optional</sup> <a name="information_schema_stats_expiry" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.informationSchemaStatsExpiry"></a>

- *Type:* typing.Union[int, float]

The time, in seconds, before cached statistics expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#information_schema_stats_expiry ManagedDatabaseMysql#information_schema_stats_expiry}

---

###### `innodb_change_buffer_max_size`<sup>Optional</sup> <a name="innodb_change_buffer_max_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbChangeBufferMaxSize"></a>

- *Type:* typing.Union[int, float]

Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool.

Default is 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_change_buffer_max_size ManagedDatabaseMysql#innodb_change_buffer_max_size}

---

###### `innodb_flush_neighbors`<sup>Optional</sup> <a name="innodb_flush_neighbors" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbFlushNeighbors"></a>

- *Type:* typing.Union[int, float]

Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_flush_neighbors ManagedDatabaseMysql#innodb_flush_neighbors}

---

###### `innodb_ft_min_token_size`<sup>Optional</sup> <a name="innodb_ft_min_token_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbFtMinTokenSize"></a>

- *Type:* typing.Union[int, float]

Minimum length of words that are stored in an InnoDB FULLTEXT index.

Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_ft_min_token_size ManagedDatabaseMysql#innodb_ft_min_token_size}

---

###### `innodb_ft_server_stopword_table`<sup>Optional</sup> <a name="innodb_ft_server_stopword_table" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbFtServerStopwordTable"></a>

- *Type:* str

This option is used to specify your own InnoDB FULLTEXT index stopword list for all InnoDB tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_ft_server_stopword_table ManagedDatabaseMysql#innodb_ft_server_stopword_table}

---

###### `innodb_lock_wait_timeout`<sup>Optional</sup> <a name="innodb_lock_wait_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbLockWaitTimeout"></a>

- *Type:* typing.Union[int, float]

The length of time in seconds an InnoDB transaction waits for a row lock before giving up.

Default is 120.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_lock_wait_timeout ManagedDatabaseMysql#innodb_lock_wait_timeout}

---

###### `innodb_log_buffer_size`<sup>Optional</sup> <a name="innodb_log_buffer_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbLogBufferSize"></a>

- *Type:* typing.Union[int, float]

The size in bytes of the buffer that InnoDB uses to write to the log files on disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_log_buffer_size ManagedDatabaseMysql#innodb_log_buffer_size}

---

###### `innodb_online_alter_log_max_size`<sup>Optional</sup> <a name="innodb_online_alter_log_max_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbOnlineAlterLogMaxSize"></a>

- *Type:* typing.Union[int, float]

The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_online_alter_log_max_size ManagedDatabaseMysql#innodb_online_alter_log_max_size}

---

###### `innodb_print_all_deadlocks`<sup>Optional</sup> <a name="innodb_print_all_deadlocks" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbPrintAllDeadlocks"></a>

- *Type:* bool | cdktf.IResolvable

When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_print_all_deadlocks ManagedDatabaseMysql#innodb_print_all_deadlocks}

---

###### `innodb_read_io_threads`<sup>Optional</sup> <a name="innodb_read_io_threads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbReadIoThreads"></a>

- *Type:* typing.Union[int, float]

The number of I/O threads for read operations in InnoDB.

Default is 4. Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_read_io_threads ManagedDatabaseMysql#innodb_read_io_threads}

---

###### `innodb_rollback_on_timeout`<sup>Optional</sup> <a name="innodb_rollback_on_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbRollbackOnTimeout"></a>

- *Type:* bool | cdktf.IResolvable

When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction.

Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_rollback_on_timeout ManagedDatabaseMysql#innodb_rollback_on_timeout}

---

###### `innodb_thread_concurrency`<sup>Optional</sup> <a name="innodb_thread_concurrency" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbThreadConcurrency"></a>

- *Type:* typing.Union[int, float]

Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_thread_concurrency ManagedDatabaseMysql#innodb_thread_concurrency}

---

###### `innodb_write_io_threads`<sup>Optional</sup> <a name="innodb_write_io_threads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.innodbWriteIoThreads"></a>

- *Type:* typing.Union[int, float]

The number of I/O threads for write operations in InnoDB.

Default is 4. Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_write_io_threads ManagedDatabaseMysql#innodb_write_io_threads}

---

###### `interactive_timeout`<sup>Optional</sup> <a name="interactive_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.interactiveTimeout"></a>

- *Type:* typing.Union[int, float]

The number of seconds the server waits for activity on an interactive connection before closing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#interactive_timeout ManagedDatabaseMysql#interactive_timeout}

---

###### `internal_tmp_mem_storage_engine`<sup>Optional</sup> <a name="internal_tmp_mem_storage_engine" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.internalTmpMemStorageEngine"></a>

- *Type:* str

The storage engine for in-memory internal temporary tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#internal_tmp_mem_storage_engine ManagedDatabaseMysql#internal_tmp_mem_storage_engine}

---

###### `ip_filter`<sup>Optional</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.ipFilter"></a>

- *Type:* typing.List[str]

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#ip_filter ManagedDatabaseMysql#ip_filter}

---

###### `log_output`<sup>Optional</sup> <a name="log_output" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.logOutput"></a>

- *Type:* str

The slow log output destination when slow_query_log is ON.

To enable MySQL AI Insights, choose INSIGHTS. To use MySQL AI Insights and the mysql.slow_log table at the same time, choose INSIGHTS,TABLE. To only use the mysql.slow_log table, choose TABLE. To silence slow logs, choose NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#log_output ManagedDatabaseMysql#log_output}

---

###### `long_query_time`<sup>Optional</sup> <a name="long_query_time" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.longQueryTime"></a>

- *Type:* typing.Union[int, float]

The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#long_query_time ManagedDatabaseMysql#long_query_time}

---

###### `max_allowed_packet`<sup>Optional</sup> <a name="max_allowed_packet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.maxAllowedPacket"></a>

- *Type:* typing.Union[int, float]

Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#max_allowed_packet ManagedDatabaseMysql#max_allowed_packet}

---

###### `max_heap_table_size`<sup>Optional</sup> <a name="max_heap_table_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.maxHeapTableSize"></a>

- *Type:* typing.Union[int, float]

Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#max_heap_table_size ManagedDatabaseMysql#max_heap_table_size}

---

###### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.migration"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#migration ManagedDatabaseMysql#migration}

---

###### `mysql_incremental_backup`<sup>Optional</sup> <a name="mysql_incremental_backup" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.mysqlIncrementalBackup"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup">ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup</a>

mysql_incremental_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#mysql_incremental_backup ManagedDatabaseMysql#mysql_incremental_backup}

---

###### `net_buffer_length`<sup>Optional</sup> <a name="net_buffer_length" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.netBufferLength"></a>

- *Type:* typing.Union[int, float]

Start sizes of connection buffer and result buffer.

Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#net_buffer_length ManagedDatabaseMysql#net_buffer_length}

---

###### `net_read_timeout`<sup>Optional</sup> <a name="net_read_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.netReadTimeout"></a>

- *Type:* typing.Union[int, float]

The number of seconds to wait for more data from a connection before aborting the read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#net_read_timeout ManagedDatabaseMysql#net_read_timeout}

---

###### `net_write_timeout`<sup>Optional</sup> <a name="net_write_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.netWriteTimeout"></a>

- *Type:* typing.Union[int, float]

The number of seconds to wait for a block to be written to a connection before aborting the write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#net_write_timeout ManagedDatabaseMysql#net_write_timeout}

---

###### `public_access`<sup>Optional</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.publicAccess"></a>

- *Type:* bool | cdktf.IResolvable

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#public_access ManagedDatabaseMysql#public_access}

---

###### `service_log`<sup>Optional</sup> <a name="service_log" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.serviceLog"></a>

- *Type:* bool | cdktf.IResolvable

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#service_log ManagedDatabaseMysql#service_log}

---

###### `slow_query_log`<sup>Optional</sup> <a name="slow_query_log" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.slowQueryLog"></a>

- *Type:* bool | cdktf.IResolvable

Slow query log enables capturing of slow queries. Setting slow_query_log to false also truncates the mysql.slow_log table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#slow_query_log ManagedDatabaseMysql#slow_query_log}

---

###### `sort_buffer_size`<sup>Optional</sup> <a name="sort_buffer_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.sortBufferSize"></a>

- *Type:* typing.Union[int, float]

Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#sort_buffer_size ManagedDatabaseMysql#sort_buffer_size}

---

###### `sql_mode`<sup>Optional</sup> <a name="sql_mode" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.sqlMode"></a>

- *Type:* str

Global SQL mode.

Set to empty to use MySQL server defaults. When creating a new service and not setting this field Aiven default SQL mode (strict, SQL standard compliant) will be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#sql_mode ManagedDatabaseMysql#sql_mode}

---

###### `sql_require_primary_key`<sup>Optional</sup> <a name="sql_require_primary_key" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.sqlRequirePrimaryKey"></a>

- *Type:* bool | cdktf.IResolvable

Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing.

It is recommended to always have primary keys because various functionality may break if any large table is missing them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#sql_require_primary_key ManagedDatabaseMysql#sql_require_primary_key}

---

###### `tmp_table_size`<sup>Optional</sup> <a name="tmp_table_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.tmpTableSize"></a>

- *Type:* typing.Union[int, float]

Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#tmp_table_size ManagedDatabaseMysql#tmp_table_size}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.version"></a>

- *Type:* str

MySQL major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#version ManagedDatabaseMysql#version}

---

###### `wait_timeout`<sup>Optional</sup> <a name="wait_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.waitTimeout"></a>

- *Type:* typing.Union[int, float]

The number of seconds the server waits for activity on a noninteractive connection before closing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#wait_timeout ManagedDatabaseMysql#wait_timeout}

---

##### `reset_additional_disk_space_gib` <a name="reset_additional_disk_space_gib" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetAdditionalDiskSpaceGib"></a>

```python
def reset_additional_disk_space_gib() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_maintenance_window_dow` <a name="reset_maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowDow"></a>

```python
def reset_maintenance_window_dow() -> None
```

##### `reset_maintenance_window_time` <a name="reset_maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowTime"></a>

```python
def reset_maintenance_window_time() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_powered` <a name="reset_powered" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetPowered"></a>

```python
def reset_powered() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_termination_protection` <a name="reset_termination_protection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetTerminationProtection"></a>

```python
def reset_termination_protection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagedDatabaseMysql resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysql.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysql.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysql.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysql.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagedDatabaseMysql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedDatabaseMysql to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedDatabaseMysql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseMysql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.components">components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList">ManagedDatabaseMysqlComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.network">network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList">ManagedDatabaseMysqlNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nodeStates">node_states</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList">ManagedDatabaseMysqlNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.primaryDatabase">primary_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference">ManagedDatabaseMysqlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceHost">service_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePassword">service_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePort">service_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUri">service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUsername">service_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.additionalDiskSpaceGibInput">additional_disk_space_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDowInput">maintenance_window_dow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTimeInput">maintenance_window_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.networkInput">network_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.poweredInput">powered_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terminationProtectionInput">termination_protection_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.additionalDiskSpaceGib">additional_disk_space_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.powered">powered</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terminationProtection">termination_protection</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.components"></a>

```python
components: ManagedDatabaseMysqlComponentsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList">ManagedDatabaseMysqlComponentsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.network"></a>

```python
network: ManagedDatabaseMysqlNetworkList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList">ManagedDatabaseMysqlNetworkList</a>

---

##### `node_states`<sup>Required</sup> <a name="node_states" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nodeStates"></a>

```python
node_states: ManagedDatabaseMysqlNodeStatesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList">ManagedDatabaseMysqlNodeStatesList</a>

---

##### `primary_database`<sup>Required</sup> <a name="primary_database" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.primaryDatabase"></a>

```python
primary_database: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.properties"></a>

```python
properties: ManagedDatabaseMysqlPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference">ManagedDatabaseMysqlPropertiesOutputReference</a>

---

##### `service_host`<sup>Required</sup> <a name="service_host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceHost"></a>

```python
service_host: str
```

- *Type:* str

---

##### `service_password`<sup>Required</sup> <a name="service_password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePassword"></a>

```python
service_password: str
```

- *Type:* str

---

##### `service_port`<sup>Required</sup> <a name="service_port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePort"></a>

```python
service_port: str
```

- *Type:* str

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

---

##### `service_username`<sup>Required</sup> <a name="service_username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUsername"></a>

```python
service_username: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `additional_disk_space_gib_input`<sup>Optional</sup> <a name="additional_disk_space_gib_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.additionalDiskSpaceGibInput"></a>

```python
additional_disk_space_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `maintenance_window_dow_input`<sup>Optional</sup> <a name="maintenance_window_dow_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDowInput"></a>

```python
maintenance_window_dow_input: str
```

- *Type:* str

---

##### `maintenance_window_time_input`<sup>Optional</sup> <a name="maintenance_window_time_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTimeInput"></a>

```python
maintenance_window_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.networkInput"></a>

```python
network_input: IResolvable | typing.List[ManagedDatabaseMysqlNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>]

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `powered_input`<sup>Optional</sup> <a name="powered_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.poweredInput"></a>

```python
powered_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.propertiesInput"></a>

```python
properties_input: ManagedDatabaseMysqlProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

---

##### `termination_protection_input`<sup>Optional</sup> <a name="termination_protection_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terminationProtectionInput"></a>

```python
termination_protection_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `additional_disk_space_gib`<sup>Required</sup> <a name="additional_disk_space_gib" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.additionalDiskSpaceGib"></a>

```python
additional_disk_space_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `maintenance_window_dow`<sup>Required</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDow"></a>

```python
maintenance_window_dow: str
```

- *Type:* str

---

##### `maintenance_window_time`<sup>Required</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTime"></a>

```python
maintenance_window_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `powered`<sup>Required</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.powered"></a>

```python
powered: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `termination_protection`<sup>Required</sup> <a name="termination_protection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terminationProtection"></a>

```python
termination_protection: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseMysqlComponents <a name="ManagedDatabaseMysqlComponents" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlComponents()
```


### ManagedDatabaseMysqlConfig <a name="ManagedDatabaseMysqlConfig" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  plan: str,
  title: str,
  zone: str,
  additional_disk_space_gib: typing.Union[int, float] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  maintenance_window_dow: str = None,
  maintenance_window_time: str = None,
  network: IResolvable | typing.List[ManagedDatabaseMysqlNetwork] = None,
  powered: bool | IResolvable = None,
  properties: ManagedDatabaseMysqlProperties = None,
  termination_protection: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.name">name</a></code> | <code>str</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.plan">plan</a></code> | <code>str</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.title">title</a></code> | <code>str</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.zone">zone</a></code> | <code>str</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.additionalDiskSpaceGib">additional_disk_space_gib</a></code> | <code>typing.Union[int, float]</code> | Additional disk space in GiB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#id ManagedDatabaseMysql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.network">network</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>]</code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.powered">powered</a></code> | <code>bool \| cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.terminationProtection">termination_protection</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#name ManagedDatabaseMysql#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.plan"></a>

```python
plan: str
```

- *Type:* str

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans mysql`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#plan ManagedDatabaseMysql#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#title ManagedDatabaseMysql#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#zone ManagedDatabaseMysql#zone}

---

##### `additional_disk_space_gib`<sup>Optional</sup> <a name="additional_disk_space_gib" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.additionalDiskSpaceGib"></a>

```python
additional_disk_space_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Additional disk space in GiB.

Note that changes in additional disk space might require disk maintenance. This pending maintenance blocks some operations, such as version upgrades, until the maintenance is completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#additional_disk_space_gib ManagedDatabaseMysql#additional_disk_space_gib}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#id ManagedDatabaseMysql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#labels ManagedDatabaseMysql#labels}

---

##### `maintenance_window_dow`<sup>Optional</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowDow"></a>

```python
maintenance_window_dow: str
```

- *Type:* str

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#maintenance_window_dow ManagedDatabaseMysql#maintenance_window_dow}

---

##### `maintenance_window_time`<sup>Optional</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowTime"></a>

```python
maintenance_window_time: str
```

- *Type:* str

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#maintenance_window_time ManagedDatabaseMysql#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.network"></a>

```python
network: IResolvable | typing.List[ManagedDatabaseMysqlNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#network ManagedDatabaseMysql#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.powered"></a>

```python
powered: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#powered ManagedDatabaseMysql#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.properties"></a>

```python
properties: ManagedDatabaseMysqlProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#properties ManagedDatabaseMysql#properties}

---

##### `termination_protection`<sup>Optional</sup> <a name="termination_protection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.terminationProtection"></a>

```python
termination_protection: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#termination_protection ManagedDatabaseMysql#termination_protection}

---

### ManagedDatabaseMysqlNetwork <a name="ManagedDatabaseMysqlNetwork" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlNetwork(
  family: str,
  name: str,
  type: str,
  uuid: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.family">family</a></code> | <code>str</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.name">name</a></code> | <code>str</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.type">type</a></code> | <code>str</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.uuid">uuid</a></code> | <code>str</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.family"></a>

```python
family: str
```

- *Type:* str

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#family ManagedDatabaseMysql#family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#name ManagedDatabaseMysql#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#type ManagedDatabaseMysql#type}

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#uuid ManagedDatabaseMysql#uuid}

---

### ManagedDatabaseMysqlNodeStates <a name="ManagedDatabaseMysqlNodeStates" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlNodeStates()
```


### ManagedDatabaseMysqlProperties <a name="ManagedDatabaseMysqlProperties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlProperties(
  admin_password: str = None,
  admin_username: str = None,
  automatic_utility_network_ip_filter: bool | IResolvable = None,
  backup_hour: typing.Union[int, float] = None,
  backup_minute: typing.Union[int, float] = None,
  binlog_retention_period: typing.Union[int, float] = None,
  connect_timeout: typing.Union[int, float] = None,
  default_time_zone: str = None,
  group_concat_max_len: typing.Union[int, float] = None,
  information_schema_stats_expiry: typing.Union[int, float] = None,
  innodb_change_buffer_max_size: typing.Union[int, float] = None,
  innodb_flush_neighbors: typing.Union[int, float] = None,
  innodb_ft_min_token_size: typing.Union[int, float] = None,
  innodb_ft_server_stopword_table: str = None,
  innodb_lock_wait_timeout: typing.Union[int, float] = None,
  innodb_log_buffer_size: typing.Union[int, float] = None,
  innodb_online_alter_log_max_size: typing.Union[int, float] = None,
  innodb_print_all_deadlocks: bool | IResolvable = None,
  innodb_read_io_threads: typing.Union[int, float] = None,
  innodb_rollback_on_timeout: bool | IResolvable = None,
  innodb_thread_concurrency: typing.Union[int, float] = None,
  innodb_write_io_threads: typing.Union[int, float] = None,
  interactive_timeout: typing.Union[int, float] = None,
  internal_tmp_mem_storage_engine: str = None,
  ip_filter: typing.List[str] = None,
  log_output: str = None,
  long_query_time: typing.Union[int, float] = None,
  max_allowed_packet: typing.Union[int, float] = None,
  max_heap_table_size: typing.Union[int, float] = None,
  migration: ManagedDatabaseMysqlPropertiesMigration = None,
  mysql_incremental_backup: ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup = None,
  net_buffer_length: typing.Union[int, float] = None,
  net_read_timeout: typing.Union[int, float] = None,
  net_write_timeout: typing.Union[int, float] = None,
  public_access: bool | IResolvable = None,
  service_log: bool | IResolvable = None,
  slow_query_log: bool | IResolvable = None,
  sort_buffer_size: typing.Union[int, float] = None,
  sql_mode: str = None,
  sql_require_primary_key: bool | IResolvable = None,
  tmp_table_size: typing.Union[int, float] = None,
  version: str = None,
  wait_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminPassword">admin_password</a></code> | <code>str</code> | Custom password for admin user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminUsername">admin_username</a></code> | <code>str</code> | Custom username for admin user. This must be set only when a new service is being created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.automaticUtilityNetworkIpFilter">automatic_utility_network_ip_filter</a></code> | <code>bool \| cdktf.IResolvable</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.binlogRetentionPeriod">binlog_retention_period</a></code> | <code>typing.Union[int, float]</code> | The minimum amount of time in seconds to keep binlog entries before deletion. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.defaultTimeZone">default_time_zone</a></code> | <code>str</code> | Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.groupConcatMaxLen">group_concat_max_len</a></code> | <code>typing.Union[int, float]</code> | The maximum permitted result length in bytes for the GROUP_CONCAT() function. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.informationSchemaStatsExpiry">information_schema_stats_expiry</a></code> | <code>typing.Union[int, float]</code> | The time, in seconds, before cached statistics expire. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbChangeBufferMaxSize">innodb_change_buffer_max_size</a></code> | <code>typing.Union[int, float]</code> | Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFlushNeighbors">innodb_flush_neighbors</a></code> | <code>typing.Union[int, float]</code> | Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtMinTokenSize">innodb_ft_min_token_size</a></code> | <code>typing.Union[int, float]</code> | Minimum length of words that are stored in an InnoDB FULLTEXT index. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtServerStopwordTable">innodb_ft_server_stopword_table</a></code> | <code>str</code> | This option is used to specify your own InnoDB FULLTEXT index stopword list for all InnoDB tables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLockWaitTimeout">innodb_lock_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | The length of time in seconds an InnoDB transaction waits for a row lock before giving up. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLogBufferSize">innodb_log_buffer_size</a></code> | <code>typing.Union[int, float]</code> | The size in bytes of the buffer that InnoDB uses to write to the log files on disk. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbOnlineAlterLogMaxSize">innodb_online_alter_log_max_size</a></code> | <code>typing.Union[int, float]</code> | The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbPrintAllDeadlocks">innodb_print_all_deadlocks</a></code> | <code>bool \| cdktf.IResolvable</code> | When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbReadIoThreads">innodb_read_io_threads</a></code> | <code>typing.Union[int, float]</code> | The number of I/O threads for read operations in InnoDB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbRollbackOnTimeout">innodb_rollback_on_timeout</a></code> | <code>bool \| cdktf.IResolvable</code> | When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbThreadConcurrency">innodb_thread_concurrency</a></code> | <code>typing.Union[int, float]</code> | Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbWriteIoThreads">innodb_write_io_threads</a></code> | <code>typing.Union[int, float]</code> | The number of I/O threads for write operations in InnoDB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.interactiveTimeout">interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds the server waits for activity on an interactive connection before closing it. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.internalTmpMemStorageEngine">internal_tmp_mem_storage_engine</a></code> | <code>str</code> | The storage engine for in-memory internal temporary tables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.ipFilter">ip_filter</a></code> | <code>typing.List[str]</code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.logOutput">log_output</a></code> | <code>str</code> | The slow log output destination when slow_query_log is ON. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.longQueryTime">long_query_time</a></code> | <code>typing.Union[int, float]</code> | The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxAllowedPacket">max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxHeapTableSize">max_heap_table_size</a></code> | <code>typing.Union[int, float]</code> | Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.mysqlIncrementalBackup">mysql_incremental_backup</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup">ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup</a></code> | mysql_incremental_backup block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netBufferLength">net_buffer_length</a></code> | <code>typing.Union[int, float]</code> | Start sizes of connection buffer and result buffer. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netReadTimeout">net_read_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds to wait for more data from a connection before aborting the read. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netWriteTimeout">net_write_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds to wait for a block to be written to a connection before aborting the write. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.publicAccess">public_access</a></code> | <code>bool \| cdktf.IResolvable</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.serviceLog">service_log</a></code> | <code>bool \| cdktf.IResolvable</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.slowQueryLog">slow_query_log</a></code> | <code>bool \| cdktf.IResolvable</code> | Slow query log enables capturing of slow queries. Setting slow_query_log to false also truncates the mysql.slow_log table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sortBufferSize">sort_buffer_size</a></code> | <code>typing.Union[int, float]</code> | Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlMode">sql_mode</a></code> | <code>str</code> | Global SQL mode. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlRequirePrimaryKey">sql_require_primary_key</a></code> | <code>bool \| cdktf.IResolvable</code> | Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.tmpTableSize">tmp_table_size</a></code> | <code>typing.Union[int, float]</code> | Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.version">version</a></code> | <code>str</code> | MySQL major version. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds the server waits for activity on a noninteractive connection before closing it. |

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Custom password for admin user.

Defaults to random string. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#admin_password ManagedDatabaseMysql#admin_password}

---

##### `admin_username`<sup>Optional</sup> <a name="admin_username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

Custom username for admin user. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#admin_username ManagedDatabaseMysql#admin_username}

---

##### `automatic_utility_network_ip_filter`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.automaticUtilityNetworkIpFilter"></a>

```python
automatic_utility_network_ip_filter: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#automatic_utility_network_ip_filter ManagedDatabaseMysql#automatic_utility_network_ip_filter}

---

##### `backup_hour`<sup>Optional</sup> <a name="backup_hour" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupHour"></a>

```python
backup_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#backup_hour ManagedDatabaseMysql#backup_hour}

---

##### `backup_minute`<sup>Optional</sup> <a name="backup_minute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupMinute"></a>

```python
backup_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#backup_minute ManagedDatabaseMysql#backup_minute}

---

##### `binlog_retention_period`<sup>Optional</sup> <a name="binlog_retention_period" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.binlogRetentionPeriod"></a>

```python
binlog_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum amount of time in seconds to keep binlog entries before deletion.

This may be extended for services that require binlog entries for longer than the default for example if using the MySQL Debezium Kafka connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#binlog_retention_period ManagedDatabaseMysql#binlog_retention_period}

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#connect_timeout ManagedDatabaseMysql#connect_timeout}

---

##### `default_time_zone`<sup>Optional</sup> <a name="default_time_zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.defaultTimeZone"></a>

```python
default_time_zone: str
```

- *Type:* str

Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#default_time_zone ManagedDatabaseMysql#default_time_zone}

---

##### `group_concat_max_len`<sup>Optional</sup> <a name="group_concat_max_len" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.groupConcatMaxLen"></a>

```python
group_concat_max_len: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum permitted result length in bytes for the GROUP_CONCAT() function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#group_concat_max_len ManagedDatabaseMysql#group_concat_max_len}

---

##### `information_schema_stats_expiry`<sup>Optional</sup> <a name="information_schema_stats_expiry" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.informationSchemaStatsExpiry"></a>

```python
information_schema_stats_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time, in seconds, before cached statistics expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#information_schema_stats_expiry ManagedDatabaseMysql#information_schema_stats_expiry}

---

##### `innodb_change_buffer_max_size`<sup>Optional</sup> <a name="innodb_change_buffer_max_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbChangeBufferMaxSize"></a>

```python
innodb_change_buffer_max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool.

Default is 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_change_buffer_max_size ManagedDatabaseMysql#innodb_change_buffer_max_size}

---

##### `innodb_flush_neighbors`<sup>Optional</sup> <a name="innodb_flush_neighbors" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFlushNeighbors"></a>

```python
innodb_flush_neighbors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_flush_neighbors ManagedDatabaseMysql#innodb_flush_neighbors}

---

##### `innodb_ft_min_token_size`<sup>Optional</sup> <a name="innodb_ft_min_token_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtMinTokenSize"></a>

```python
innodb_ft_min_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum length of words that are stored in an InnoDB FULLTEXT index.

Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_ft_min_token_size ManagedDatabaseMysql#innodb_ft_min_token_size}

---

##### `innodb_ft_server_stopword_table`<sup>Optional</sup> <a name="innodb_ft_server_stopword_table" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtServerStopwordTable"></a>

```python
innodb_ft_server_stopword_table: str
```

- *Type:* str

This option is used to specify your own InnoDB FULLTEXT index stopword list for all InnoDB tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_ft_server_stopword_table ManagedDatabaseMysql#innodb_ft_server_stopword_table}

---

##### `innodb_lock_wait_timeout`<sup>Optional</sup> <a name="innodb_lock_wait_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLockWaitTimeout"></a>

```python
innodb_lock_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of time in seconds an InnoDB transaction waits for a row lock before giving up.

Default is 120.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_lock_wait_timeout ManagedDatabaseMysql#innodb_lock_wait_timeout}

---

##### `innodb_log_buffer_size`<sup>Optional</sup> <a name="innodb_log_buffer_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLogBufferSize"></a>

```python
innodb_log_buffer_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size in bytes of the buffer that InnoDB uses to write to the log files on disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_log_buffer_size ManagedDatabaseMysql#innodb_log_buffer_size}

---

##### `innodb_online_alter_log_max_size`<sup>Optional</sup> <a name="innodb_online_alter_log_max_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbOnlineAlterLogMaxSize"></a>

```python
innodb_online_alter_log_max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_online_alter_log_max_size ManagedDatabaseMysql#innodb_online_alter_log_max_size}

---

##### `innodb_print_all_deadlocks`<sup>Optional</sup> <a name="innodb_print_all_deadlocks" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbPrintAllDeadlocks"></a>

```python
innodb_print_all_deadlocks: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_print_all_deadlocks ManagedDatabaseMysql#innodb_print_all_deadlocks}

---

##### `innodb_read_io_threads`<sup>Optional</sup> <a name="innodb_read_io_threads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbReadIoThreads"></a>

```python
innodb_read_io_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of I/O threads for read operations in InnoDB.

Default is 4. Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_read_io_threads ManagedDatabaseMysql#innodb_read_io_threads}

---

##### `innodb_rollback_on_timeout`<sup>Optional</sup> <a name="innodb_rollback_on_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbRollbackOnTimeout"></a>

```python
innodb_rollback_on_timeout: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction.

Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_rollback_on_timeout ManagedDatabaseMysql#innodb_rollback_on_timeout}

---

##### `innodb_thread_concurrency`<sup>Optional</sup> <a name="innodb_thread_concurrency" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbThreadConcurrency"></a>

```python
innodb_thread_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_thread_concurrency ManagedDatabaseMysql#innodb_thread_concurrency}

---

##### `innodb_write_io_threads`<sup>Optional</sup> <a name="innodb_write_io_threads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbWriteIoThreads"></a>

```python
innodb_write_io_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of I/O threads for write operations in InnoDB.

Default is 4. Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#innodb_write_io_threads ManagedDatabaseMysql#innodb_write_io_threads}

---

##### `interactive_timeout`<sup>Optional</sup> <a name="interactive_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.interactiveTimeout"></a>

```python
interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds the server waits for activity on an interactive connection before closing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#interactive_timeout ManagedDatabaseMysql#interactive_timeout}

---

##### `internal_tmp_mem_storage_engine`<sup>Optional</sup> <a name="internal_tmp_mem_storage_engine" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.internalTmpMemStorageEngine"></a>

```python
internal_tmp_mem_storage_engine: str
```

- *Type:* str

The storage engine for in-memory internal temporary tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#internal_tmp_mem_storage_engine ManagedDatabaseMysql#internal_tmp_mem_storage_engine}

---

##### `ip_filter`<sup>Optional</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.ipFilter"></a>

```python
ip_filter: typing.List[str]
```

- *Type:* typing.List[str]

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#ip_filter ManagedDatabaseMysql#ip_filter}

---

##### `log_output`<sup>Optional</sup> <a name="log_output" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.logOutput"></a>

```python
log_output: str
```

- *Type:* str

The slow log output destination when slow_query_log is ON.

To enable MySQL AI Insights, choose INSIGHTS. To use MySQL AI Insights and the mysql.slow_log table at the same time, choose INSIGHTS,TABLE. To only use the mysql.slow_log table, choose TABLE. To silence slow logs, choose NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#log_output ManagedDatabaseMysql#log_output}

---

##### `long_query_time`<sup>Optional</sup> <a name="long_query_time" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.longQueryTime"></a>

```python
long_query_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#long_query_time ManagedDatabaseMysql#long_query_time}

---

##### `max_allowed_packet`<sup>Optional</sup> <a name="max_allowed_packet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxAllowedPacket"></a>

```python
max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#max_allowed_packet ManagedDatabaseMysql#max_allowed_packet}

---

##### `max_heap_table_size`<sup>Optional</sup> <a name="max_heap_table_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxHeapTableSize"></a>

```python
max_heap_table_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#max_heap_table_size ManagedDatabaseMysql#max_heap_table_size}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.migration"></a>

```python
migration: ManagedDatabaseMysqlPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#migration ManagedDatabaseMysql#migration}

---

##### `mysql_incremental_backup`<sup>Optional</sup> <a name="mysql_incremental_backup" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.mysqlIncrementalBackup"></a>

```python
mysql_incremental_backup: ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup">ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup</a>

mysql_incremental_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#mysql_incremental_backup ManagedDatabaseMysql#mysql_incremental_backup}

---

##### `net_buffer_length`<sup>Optional</sup> <a name="net_buffer_length" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netBufferLength"></a>

```python
net_buffer_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Start sizes of connection buffer and result buffer.

Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#net_buffer_length ManagedDatabaseMysql#net_buffer_length}

---

##### `net_read_timeout`<sup>Optional</sup> <a name="net_read_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netReadTimeout"></a>

```python
net_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds to wait for more data from a connection before aborting the read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#net_read_timeout ManagedDatabaseMysql#net_read_timeout}

---

##### `net_write_timeout`<sup>Optional</sup> <a name="net_write_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netWriteTimeout"></a>

```python
net_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds to wait for a block to be written to a connection before aborting the write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#net_write_timeout ManagedDatabaseMysql#net_write_timeout}

---

##### `public_access`<sup>Optional</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.publicAccess"></a>

```python
public_access: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#public_access ManagedDatabaseMysql#public_access}

---

##### `service_log`<sup>Optional</sup> <a name="service_log" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.serviceLog"></a>

```python
service_log: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#service_log ManagedDatabaseMysql#service_log}

---

##### `slow_query_log`<sup>Optional</sup> <a name="slow_query_log" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.slowQueryLog"></a>

```python
slow_query_log: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Slow query log enables capturing of slow queries. Setting slow_query_log to false also truncates the mysql.slow_log table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#slow_query_log ManagedDatabaseMysql#slow_query_log}

---

##### `sort_buffer_size`<sup>Optional</sup> <a name="sort_buffer_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sortBufferSize"></a>

```python
sort_buffer_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#sort_buffer_size ManagedDatabaseMysql#sort_buffer_size}

---

##### `sql_mode`<sup>Optional</sup> <a name="sql_mode" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlMode"></a>

```python
sql_mode: str
```

- *Type:* str

Global SQL mode.

Set to empty to use MySQL server defaults. When creating a new service and not setting this field Aiven default SQL mode (strict, SQL standard compliant) will be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#sql_mode ManagedDatabaseMysql#sql_mode}

---

##### `sql_require_primary_key`<sup>Optional</sup> <a name="sql_require_primary_key" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlRequirePrimaryKey"></a>

```python
sql_require_primary_key: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing.

It is recommended to always have primary keys because various functionality may break if any large table is missing them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#sql_require_primary_key ManagedDatabaseMysql#sql_require_primary_key}

---

##### `tmp_table_size`<sup>Optional</sup> <a name="tmp_table_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.tmpTableSize"></a>

```python
tmp_table_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#tmp_table_size ManagedDatabaseMysql#tmp_table_size}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.version"></a>

```python
version: str
```

- *Type:* str

MySQL major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#version ManagedDatabaseMysql#version}

---

##### `wait_timeout`<sup>Optional</sup> <a name="wait_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.waitTimeout"></a>

```python
wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds the server waits for activity on a noninteractive connection before closing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#wait_timeout ManagedDatabaseMysql#wait_timeout}

---

### ManagedDatabaseMysqlPropertiesMigration <a name="ManagedDatabaseMysqlPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration(
  dbname: str = None,
  host: str = None,
  ignore_dbs: str = None,
  ignore_roles: str = None,
  method: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  ssl: bool | IResolvable = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.dbname">dbname</a></code> | <code>str</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.host">host</a></code> | <code>str</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ignoreDbs">ignore_dbs</a></code> | <code>str</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ignoreRoles">ignore_roles</a></code> | <code>str</code> | Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.method">method</a></code> | <code>str</code> | The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.password">password</a></code> | <code>str</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ssl">ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.username">username</a></code> | <code>str</code> | User name for authentication with the server where to migrate data from. |

---

##### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.dbname"></a>

```python
dbname: str
```

- *Type:* str

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#dbname ManagedDatabaseMysql#dbname}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.host"></a>

```python
host: str
```

- *Type:* str

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#host ManagedDatabaseMysql#host}

---

##### `ignore_dbs`<sup>Optional</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ignoreDbs"></a>

```python
ignore_dbs: str
```

- *Type:* str

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#ignore_dbs ManagedDatabaseMysql#ignore_dbs}

---

##### `ignore_roles`<sup>Optional</sup> <a name="ignore_roles" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ignoreRoles"></a>

```python
ignore_roles: str
```

- *Type:* str

Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#ignore_roles ManagedDatabaseMysql#ignore_roles}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.method"></a>

```python
method: str
```

- *Type:* str

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#method ManagedDatabaseMysql#method}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.password"></a>

```python
password: str
```

- *Type:* str

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#password ManagedDatabaseMysql#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#port ManagedDatabaseMysql#port}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ssl"></a>

```python
ssl: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#ssl ManagedDatabaseMysql#ssl}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.username"></a>

```python
username: str
```

- *Type:* str

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#username ManagedDatabaseMysql#username}

---

### ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup <a name="ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup(
  enabled: bool | IResolvable = None,
  full_backup_week_schedule: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable incremental backups. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup.property.fullBackupWeekSchedule">full_backup_week_schedule</a></code> | <code>str</code> | Full backup week schedule. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable incremental backups.

Enable periodic incremental backups. When enabled, full_backup_week_schedule must be set. Incremental backups only store changes since the last backup, making them faster and more storage-efficient than full backups. This is particularly useful for large databases where daily full backups would be too time-consuming or expensive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#enabled ManagedDatabaseMysql#enabled}

---

##### `full_backup_week_schedule`<sup>Optional</sup> <a name="full_backup_week_schedule" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup.property.fullBackupWeekSchedule"></a>

```python
full_backup_week_schedule: str
```

- *Type:* str

Full backup week schedule.

Comma-separated list of days of the week when full backups should be created. Valid values: mon, tue, wed, thu, fri, sat, sun.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#full_backup_week_schedule ManagedDatabaseMysql#full_backup_week_schedule}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseMysqlComponentsList <a name="ManagedDatabaseMysqlComponentsList" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDatabaseMysqlComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagedDatabaseMysqlComponentsOutputReference <a name="ManagedDatabaseMysqlComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.route">route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.usage">usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents">ManagedDatabaseMysqlComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.route"></a>

```python
route: str
```

- *Type:* str

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.usage"></a>

```python
usage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseMysqlComponents
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents">ManagedDatabaseMysqlComponents</a>

---


### ManagedDatabaseMysqlNetworkList <a name="ManagedDatabaseMysqlNetworkList" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlNetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDatabaseMysqlNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDatabaseMysqlNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>]

---


### ManagedDatabaseMysqlNetworkOutputReference <a name="ManagedDatabaseMysqlNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDatabaseMysqlNetwork
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>

---


### ManagedDatabaseMysqlNodeStatesList <a name="ManagedDatabaseMysqlNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDatabaseMysqlNodeStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagedDatabaseMysqlNodeStatesOutputReference <a name="ManagedDatabaseMysqlNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates">ManagedDatabaseMysqlNodeStates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseMysqlNodeStates
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates">ManagedDatabaseMysqlNodeStates</a>

---


### ManagedDatabaseMysqlPropertiesMigrationOutputReference <a name="ManagedDatabaseMysqlPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetDbname">reset_dbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetIgnoreDbs">reset_ignore_dbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetIgnoreRoles">reset_ignore_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetSsl">reset_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dbname` <a name="reset_dbname" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetDbname"></a>

```python
def reset_dbname() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_ignore_dbs` <a name="reset_ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```python
def reset_ignore_dbs() -> None
```

##### `reset_ignore_roles` <a name="reset_ignore_roles" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetIgnoreRoles"></a>

```python
def reset_ignore_roles() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetSsl"></a>

```python
def reset_ssl() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbnameInput">dbname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbsInput">ignore_dbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreRolesInput">ignore_roles_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.sslInput">ssl_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbname">dbname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbs">ignore_dbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreRoles">ignore_roles</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ssl">ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbname_input`<sup>Optional</sup> <a name="dbname_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbnameInput"></a>

```python
dbname_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `ignore_dbs_input`<sup>Optional</sup> <a name="ignore_dbs_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```python
ignore_dbs_input: str
```

- *Type:* str

---

##### `ignore_roles_input`<sup>Optional</sup> <a name="ignore_roles_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreRolesInput"></a>

```python
ignore_roles_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.sslInput"></a>

```python
ssl_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `dbname`<sup>Required</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbname"></a>

```python
dbname: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ignore_dbs`<sup>Required</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```python
ignore_dbs: str
```

- *Type:* str

---

##### `ignore_roles`<sup>Required</sup> <a name="ignore_roles" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreRoles"></a>

```python
ignore_roles: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ssl"></a>

```python
ssl: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseMysqlPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

---


### ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference <a name="ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.resetFullBackupWeekSchedule">reset_full_backup_week_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_full_backup_week_schedule` <a name="reset_full_backup_week_schedule" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.resetFullBackupWeekSchedule"></a>

```python
def reset_full_backup_week_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.fullBackupWeekScheduleInput">full_backup_week_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.fullBackupWeekSchedule">full_backup_week_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup">ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `full_backup_week_schedule_input`<sup>Optional</sup> <a name="full_backup_week_schedule_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.fullBackupWeekScheduleInput"></a>

```python
full_backup_week_schedule_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `full_backup_week_schedule`<sup>Required</sup> <a name="full_backup_week_schedule" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.fullBackupWeekSchedule"></a>

```python
full_backup_week_schedule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup">ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup</a>

---


### ManagedDatabaseMysqlPropertiesOutputReference <a name="ManagedDatabaseMysqlPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_mysql

managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration">put_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMysqlIncrementalBackup">put_mysql_incremental_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminUsername">reset_admin_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">reset_automatic_utility_network_ip_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupHour">reset_backup_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupMinute">reset_backup_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBinlogRetentionPeriod">reset_binlog_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetDefaultTimeZone">reset_default_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetGroupConcatMaxLen">reset_group_concat_max_len</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInformationSchemaStatsExpiry">reset_information_schema_stats_expiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbChangeBufferMaxSize">reset_innodb_change_buffer_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFlushNeighbors">reset_innodb_flush_neighbors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtMinTokenSize">reset_innodb_ft_min_token_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtServerStopwordTable">reset_innodb_ft_server_stopword_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLockWaitTimeout">reset_innodb_lock_wait_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLogBufferSize">reset_innodb_log_buffer_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbOnlineAlterLogMaxSize">reset_innodb_online_alter_log_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbPrintAllDeadlocks">reset_innodb_print_all_deadlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbReadIoThreads">reset_innodb_read_io_threads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbRollbackOnTimeout">reset_innodb_rollback_on_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbThreadConcurrency">reset_innodb_thread_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbWriteIoThreads">reset_innodb_write_io_threads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInteractiveTimeout">reset_interactive_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInternalTmpMemStorageEngine">reset_internal_tmp_mem_storage_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetIpFilter">reset_ip_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetLogOutput">reset_log_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetLongQueryTime">reset_long_query_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxAllowedPacket">reset_max_allowed_packet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxHeapTableSize">reset_max_heap_table_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMigration">reset_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMysqlIncrementalBackup">reset_mysql_incremental_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetBufferLength">reset_net_buffer_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetReadTimeout">reset_net_read_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetWriteTimeout">reset_net_write_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetPublicAccess">reset_public_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetServiceLog">reset_service_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSlowQueryLog">reset_slow_query_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSortBufferSize">reset_sort_buffer_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlMode">reset_sql_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlRequirePrimaryKey">reset_sql_require_primary_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetTmpTableSize">reset_tmp_table_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetWaitTimeout">reset_wait_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_migration` <a name="put_migration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration"></a>

```python
def put_migration(
  dbname: str = None,
  host: str = None,
  ignore_dbs: str = None,
  ignore_roles: str = None,
  method: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  ssl: bool | IResolvable = None,
  username: str = None
) -> None
```

###### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration.parameter.dbname"></a>

- *Type:* str

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#dbname ManagedDatabaseMysql#dbname}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration.parameter.host"></a>

- *Type:* str

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#host ManagedDatabaseMysql#host}

---

###### `ignore_dbs`<sup>Optional</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration.parameter.ignoreDbs"></a>

- *Type:* str

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#ignore_dbs ManagedDatabaseMysql#ignore_dbs}

---

###### `ignore_roles`<sup>Optional</sup> <a name="ignore_roles" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration.parameter.ignoreRoles"></a>

- *Type:* str

Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#ignore_roles ManagedDatabaseMysql#ignore_roles}

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration.parameter.method"></a>

- *Type:* str

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#method ManagedDatabaseMysql#method}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration.parameter.password"></a>

- *Type:* str

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#password ManagedDatabaseMysql#password}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#port ManagedDatabaseMysql#port}

---

###### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration.parameter.ssl"></a>

- *Type:* bool | cdktf.IResolvable

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#ssl ManagedDatabaseMysql#ssl}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration.parameter.username"></a>

- *Type:* str

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#username ManagedDatabaseMysql#username}

---

##### `put_mysql_incremental_backup` <a name="put_mysql_incremental_backup" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMysqlIncrementalBackup"></a>

```python
def put_mysql_incremental_backup(
  enabled: bool | IResolvable = None,
  full_backup_week_schedule: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMysqlIncrementalBackup.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Enable incremental backups.

Enable periodic incremental backups. When enabled, full_backup_week_schedule must be set. Incremental backups only store changes since the last backup, making them faster and more storage-efficient than full backups. This is particularly useful for large databases where daily full backups would be too time-consuming or expensive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#enabled ManagedDatabaseMysql#enabled}

---

###### `full_backup_week_schedule`<sup>Optional</sup> <a name="full_backup_week_schedule" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMysqlIncrementalBackup.parameter.fullBackupWeekSchedule"></a>

- *Type:* str

Full backup week schedule.

Comma-separated list of days of the week when full backups should be created. Valid values: mon, tue, wed, thu, fri, sat, sun.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_database_mysql#full_backup_week_schedule ManagedDatabaseMysql#full_backup_week_schedule}

---

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_admin_username` <a name="reset_admin_username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminUsername"></a>

```python
def reset_admin_username() -> None
```

##### `reset_automatic_utility_network_ip_filter` <a name="reset_automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```python
def reset_automatic_utility_network_ip_filter() -> None
```

##### `reset_backup_hour` <a name="reset_backup_hour" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupHour"></a>

```python
def reset_backup_hour() -> None
```

##### `reset_backup_minute` <a name="reset_backup_minute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupMinute"></a>

```python
def reset_backup_minute() -> None
```

##### `reset_binlog_retention_period` <a name="reset_binlog_retention_period" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBinlogRetentionPeriod"></a>

```python
def reset_binlog_retention_period() -> None
```

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_default_time_zone` <a name="reset_default_time_zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetDefaultTimeZone"></a>

```python
def reset_default_time_zone() -> None
```

##### `reset_group_concat_max_len` <a name="reset_group_concat_max_len" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetGroupConcatMaxLen"></a>

```python
def reset_group_concat_max_len() -> None
```

##### `reset_information_schema_stats_expiry` <a name="reset_information_schema_stats_expiry" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInformationSchemaStatsExpiry"></a>

```python
def reset_information_schema_stats_expiry() -> None
```

##### `reset_innodb_change_buffer_max_size` <a name="reset_innodb_change_buffer_max_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbChangeBufferMaxSize"></a>

```python
def reset_innodb_change_buffer_max_size() -> None
```

##### `reset_innodb_flush_neighbors` <a name="reset_innodb_flush_neighbors" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFlushNeighbors"></a>

```python
def reset_innodb_flush_neighbors() -> None
```

##### `reset_innodb_ft_min_token_size` <a name="reset_innodb_ft_min_token_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtMinTokenSize"></a>

```python
def reset_innodb_ft_min_token_size() -> None
```

##### `reset_innodb_ft_server_stopword_table` <a name="reset_innodb_ft_server_stopword_table" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtServerStopwordTable"></a>

```python
def reset_innodb_ft_server_stopword_table() -> None
```

##### `reset_innodb_lock_wait_timeout` <a name="reset_innodb_lock_wait_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLockWaitTimeout"></a>

```python
def reset_innodb_lock_wait_timeout() -> None
```

##### `reset_innodb_log_buffer_size` <a name="reset_innodb_log_buffer_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLogBufferSize"></a>

```python
def reset_innodb_log_buffer_size() -> None
```

##### `reset_innodb_online_alter_log_max_size` <a name="reset_innodb_online_alter_log_max_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbOnlineAlterLogMaxSize"></a>

```python
def reset_innodb_online_alter_log_max_size() -> None
```

##### `reset_innodb_print_all_deadlocks` <a name="reset_innodb_print_all_deadlocks" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbPrintAllDeadlocks"></a>

```python
def reset_innodb_print_all_deadlocks() -> None
```

##### `reset_innodb_read_io_threads` <a name="reset_innodb_read_io_threads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbReadIoThreads"></a>

```python
def reset_innodb_read_io_threads() -> None
```

##### `reset_innodb_rollback_on_timeout` <a name="reset_innodb_rollback_on_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbRollbackOnTimeout"></a>

```python
def reset_innodb_rollback_on_timeout() -> None
```

##### `reset_innodb_thread_concurrency` <a name="reset_innodb_thread_concurrency" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbThreadConcurrency"></a>

```python
def reset_innodb_thread_concurrency() -> None
```

##### `reset_innodb_write_io_threads` <a name="reset_innodb_write_io_threads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbWriteIoThreads"></a>

```python
def reset_innodb_write_io_threads() -> None
```

##### `reset_interactive_timeout` <a name="reset_interactive_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInteractiveTimeout"></a>

```python
def reset_interactive_timeout() -> None
```

##### `reset_internal_tmp_mem_storage_engine` <a name="reset_internal_tmp_mem_storage_engine" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInternalTmpMemStorageEngine"></a>

```python
def reset_internal_tmp_mem_storage_engine() -> None
```

##### `reset_ip_filter` <a name="reset_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetIpFilter"></a>

```python
def reset_ip_filter() -> None
```

##### `reset_log_output` <a name="reset_log_output" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetLogOutput"></a>

```python
def reset_log_output() -> None
```

##### `reset_long_query_time` <a name="reset_long_query_time" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetLongQueryTime"></a>

```python
def reset_long_query_time() -> None
```

##### `reset_max_allowed_packet` <a name="reset_max_allowed_packet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxAllowedPacket"></a>

```python
def reset_max_allowed_packet() -> None
```

##### `reset_max_heap_table_size` <a name="reset_max_heap_table_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxHeapTableSize"></a>

```python
def reset_max_heap_table_size() -> None
```

##### `reset_migration` <a name="reset_migration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMigration"></a>

```python
def reset_migration() -> None
```

##### `reset_mysql_incremental_backup` <a name="reset_mysql_incremental_backup" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMysqlIncrementalBackup"></a>

```python
def reset_mysql_incremental_backup() -> None
```

##### `reset_net_buffer_length` <a name="reset_net_buffer_length" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetBufferLength"></a>

```python
def reset_net_buffer_length() -> None
```

##### `reset_net_read_timeout` <a name="reset_net_read_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetReadTimeout"></a>

```python
def reset_net_read_timeout() -> None
```

##### `reset_net_write_timeout` <a name="reset_net_write_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetWriteTimeout"></a>

```python
def reset_net_write_timeout() -> None
```

##### `reset_public_access` <a name="reset_public_access" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetPublicAccess"></a>

```python
def reset_public_access() -> None
```

##### `reset_service_log` <a name="reset_service_log" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetServiceLog"></a>

```python
def reset_service_log() -> None
```

##### `reset_slow_query_log` <a name="reset_slow_query_log" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSlowQueryLog"></a>

```python
def reset_slow_query_log() -> None
```

##### `reset_sort_buffer_size` <a name="reset_sort_buffer_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSortBufferSize"></a>

```python
def reset_sort_buffer_size() -> None
```

##### `reset_sql_mode` <a name="reset_sql_mode" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlMode"></a>

```python
def reset_sql_mode() -> None
```

##### `reset_sql_require_primary_key` <a name="reset_sql_require_primary_key" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlRequirePrimaryKey"></a>

```python
def reset_sql_require_primary_key() -> None
```

##### `reset_tmp_table_size` <a name="reset_tmp_table_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetTmpTableSize"></a>

```python
def reset_tmp_table_size() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_wait_timeout` <a name="reset_wait_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetWaitTimeout"></a>

```python
def reset_wait_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference">ManagedDatabaseMysqlPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.mysqlIncrementalBackup">mysql_incremental_backup</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference">ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">automatic_utility_network_ip_filter_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHourInput">backup_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinuteInput">backup_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriodInput">binlog_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZoneInput">default_time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLenInput">group_concat_max_len_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiryInput">information_schema_stats_expiry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSizeInput">innodb_change_buffer_max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighborsInput">innodb_flush_neighbors_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSizeInput">innodb_ft_min_token_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTableInput">innodb_ft_server_stopword_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeoutInput">innodb_lock_wait_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSizeInput">innodb_log_buffer_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSizeInput">innodb_online_alter_log_max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocksInput">innodb_print_all_deadlocks_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreadsInput">innodb_read_io_threads_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeoutInput">innodb_rollback_on_timeout_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrencyInput">innodb_thread_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreadsInput">innodb_write_io_threads_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeoutInput">interactive_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngineInput">internal_tmp_mem_storage_engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilterInput">ip_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.logOutputInput">log_output_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTimeInput">long_query_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacketInput">max_allowed_packet_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSizeInput">max_heap_table_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migrationInput">migration_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.mysqlIncrementalBackupInput">mysql_incremental_backup_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup">ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLengthInput">net_buffer_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeoutInput">net_read_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeoutInput">net_write_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccessInput">public_access_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLogInput">service_log_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLogInput">slow_query_log_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSizeInput">sort_buffer_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlModeInput">sql_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKeyInput">sql_require_primary_key_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSizeInput">tmp_table_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeoutInput">wait_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">automatic_utility_network_ip_filter</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriod">binlog_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZone">default_time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLen">group_concat_max_len</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiry">information_schema_stats_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSize">innodb_change_buffer_max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighbors">innodb_flush_neighbors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSize">innodb_ft_min_token_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTable">innodb_ft_server_stopword_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeout">innodb_lock_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSize">innodb_log_buffer_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSize">innodb_online_alter_log_max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocks">innodb_print_all_deadlocks</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreads">innodb_read_io_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeout">innodb_rollback_on_timeout</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrency">innodb_thread_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreads">innodb_write_io_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeout">interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngine">internal_tmp_mem_storage_engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilter">ip_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.logOutput">log_output</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTime">long_query_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacket">max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSize">max_heap_table_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLength">net_buffer_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeout">net_read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeout">net_write_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccess">public_access</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLog">service_log</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLog">slow_query_log</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSize">sort_buffer_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlMode">sql_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKey">sql_require_primary_key</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSize">tmp_table_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migration"></a>

```python
migration: ManagedDatabaseMysqlPropertiesMigrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference">ManagedDatabaseMysqlPropertiesMigrationOutputReference</a>

---

##### `mysql_incremental_backup`<sup>Required</sup> <a name="mysql_incremental_backup" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.mysqlIncrementalBackup"></a>

```python
mysql_incremental_backup: ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference">ManagedDatabaseMysqlPropertiesMysqlIncrementalBackupOutputReference</a>

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `automatic_utility_network_ip_filter_input`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```python
automatic_utility_network_ip_filter_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `backup_hour_input`<sup>Optional</sup> <a name="backup_hour_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHourInput"></a>

```python
backup_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_minute_input`<sup>Optional</sup> <a name="backup_minute_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinuteInput"></a>

```python
backup_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `binlog_retention_period_input`<sup>Optional</sup> <a name="binlog_retention_period_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriodInput"></a>

```python
binlog_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeoutInput"></a>

```python
connect_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_time_zone_input`<sup>Optional</sup> <a name="default_time_zone_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZoneInput"></a>

```python
default_time_zone_input: str
```

- *Type:* str

---

##### `group_concat_max_len_input`<sup>Optional</sup> <a name="group_concat_max_len_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLenInput"></a>

```python
group_concat_max_len_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `information_schema_stats_expiry_input`<sup>Optional</sup> <a name="information_schema_stats_expiry_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiryInput"></a>

```python
information_schema_stats_expiry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_change_buffer_max_size_input`<sup>Optional</sup> <a name="innodb_change_buffer_max_size_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSizeInput"></a>

```python
innodb_change_buffer_max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_flush_neighbors_input`<sup>Optional</sup> <a name="innodb_flush_neighbors_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighborsInput"></a>

```python
innodb_flush_neighbors_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_min_token_size_input`<sup>Optional</sup> <a name="innodb_ft_min_token_size_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSizeInput"></a>

```python
innodb_ft_min_token_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_server_stopword_table_input`<sup>Optional</sup> <a name="innodb_ft_server_stopword_table_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTableInput"></a>

```python
innodb_ft_server_stopword_table_input: str
```

- *Type:* str

---

##### `innodb_lock_wait_timeout_input`<sup>Optional</sup> <a name="innodb_lock_wait_timeout_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeoutInput"></a>

```python
innodb_lock_wait_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_log_buffer_size_input`<sup>Optional</sup> <a name="innodb_log_buffer_size_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSizeInput"></a>

```python
innodb_log_buffer_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_online_alter_log_max_size_input`<sup>Optional</sup> <a name="innodb_online_alter_log_max_size_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSizeInput"></a>

```python
innodb_online_alter_log_max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_print_all_deadlocks_input`<sup>Optional</sup> <a name="innodb_print_all_deadlocks_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocksInput"></a>

```python
innodb_print_all_deadlocks_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `innodb_read_io_threads_input`<sup>Optional</sup> <a name="innodb_read_io_threads_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreadsInput"></a>

```python
innodb_read_io_threads_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_rollback_on_timeout_input`<sup>Optional</sup> <a name="innodb_rollback_on_timeout_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeoutInput"></a>

```python
innodb_rollback_on_timeout_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `innodb_thread_concurrency_input`<sup>Optional</sup> <a name="innodb_thread_concurrency_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrencyInput"></a>

```python
innodb_thread_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_write_io_threads_input`<sup>Optional</sup> <a name="innodb_write_io_threads_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreadsInput"></a>

```python
innodb_write_io_threads_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interactive_timeout_input`<sup>Optional</sup> <a name="interactive_timeout_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeoutInput"></a>

```python
interactive_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_tmp_mem_storage_engine_input`<sup>Optional</sup> <a name="internal_tmp_mem_storage_engine_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngineInput"></a>

```python
internal_tmp_mem_storage_engine_input: str
```

- *Type:* str

---

##### `ip_filter_input`<sup>Optional</sup> <a name="ip_filter_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilterInput"></a>

```python
ip_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_output_input`<sup>Optional</sup> <a name="log_output_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.logOutputInput"></a>

```python
log_output_input: str
```

- *Type:* str

---

##### `long_query_time_input`<sup>Optional</sup> <a name="long_query_time_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTimeInput"></a>

```python
long_query_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_allowed_packet_input`<sup>Optional</sup> <a name="max_allowed_packet_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacketInput"></a>

```python
max_allowed_packet_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_heap_table_size_input`<sup>Optional</sup> <a name="max_heap_table_size_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSizeInput"></a>

```python
max_heap_table_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `migration_input`<sup>Optional</sup> <a name="migration_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migrationInput"></a>

```python
migration_input: ManagedDatabaseMysqlPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

---

##### `mysql_incremental_backup_input`<sup>Optional</sup> <a name="mysql_incremental_backup_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.mysqlIncrementalBackupInput"></a>

```python
mysql_incremental_backup_input: ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup">ManagedDatabaseMysqlPropertiesMysqlIncrementalBackup</a>

---

##### `net_buffer_length_input`<sup>Optional</sup> <a name="net_buffer_length_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLengthInput"></a>

```python
net_buffer_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_read_timeout_input`<sup>Optional</sup> <a name="net_read_timeout_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeoutInput"></a>

```python
net_read_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_write_timeout_input`<sup>Optional</sup> <a name="net_write_timeout_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeoutInput"></a>

```python
net_write_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_access_input`<sup>Optional</sup> <a name="public_access_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccessInput"></a>

```python
public_access_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `service_log_input`<sup>Optional</sup> <a name="service_log_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLogInput"></a>

```python
service_log_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `slow_query_log_input`<sup>Optional</sup> <a name="slow_query_log_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLogInput"></a>

```python
slow_query_log_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `sort_buffer_size_input`<sup>Optional</sup> <a name="sort_buffer_size_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSizeInput"></a>

```python
sort_buffer_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_mode_input`<sup>Optional</sup> <a name="sql_mode_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlModeInput"></a>

```python
sql_mode_input: str
```

- *Type:* str

---

##### `sql_require_primary_key_input`<sup>Optional</sup> <a name="sql_require_primary_key_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKeyInput"></a>

```python
sql_require_primary_key_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tmp_table_size_input`<sup>Optional</sup> <a name="tmp_table_size_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSizeInput"></a>

```python
tmp_table_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `wait_timeout_input`<sup>Optional</sup> <a name="wait_timeout_input" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeoutInput"></a>

```python
wait_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `automatic_utility_network_ip_filter`<sup>Required</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```python
automatic_utility_network_ip_filter: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `backup_hour`<sup>Required</sup> <a name="backup_hour" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHour"></a>

```python
backup_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_minute`<sup>Required</sup> <a name="backup_minute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinute"></a>

```python
backup_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `binlog_retention_period`<sup>Required</sup> <a name="binlog_retention_period" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriod"></a>

```python
binlog_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_time_zone`<sup>Required</sup> <a name="default_time_zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZone"></a>

```python
default_time_zone: str
```

- *Type:* str

---

##### `group_concat_max_len`<sup>Required</sup> <a name="group_concat_max_len" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLen"></a>

```python
group_concat_max_len: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `information_schema_stats_expiry`<sup>Required</sup> <a name="information_schema_stats_expiry" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiry"></a>

```python
information_schema_stats_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_change_buffer_max_size`<sup>Required</sup> <a name="innodb_change_buffer_max_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSize"></a>

```python
innodb_change_buffer_max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_flush_neighbors`<sup>Required</sup> <a name="innodb_flush_neighbors" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighbors"></a>

```python
innodb_flush_neighbors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_min_token_size`<sup>Required</sup> <a name="innodb_ft_min_token_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSize"></a>

```python
innodb_ft_min_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_server_stopword_table`<sup>Required</sup> <a name="innodb_ft_server_stopword_table" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTable"></a>

```python
innodb_ft_server_stopword_table: str
```

- *Type:* str

---

##### `innodb_lock_wait_timeout`<sup>Required</sup> <a name="innodb_lock_wait_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeout"></a>

```python
innodb_lock_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_log_buffer_size`<sup>Required</sup> <a name="innodb_log_buffer_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSize"></a>

```python
innodb_log_buffer_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_online_alter_log_max_size`<sup>Required</sup> <a name="innodb_online_alter_log_max_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSize"></a>

```python
innodb_online_alter_log_max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_print_all_deadlocks`<sup>Required</sup> <a name="innodb_print_all_deadlocks" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocks"></a>

```python
innodb_print_all_deadlocks: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `innodb_read_io_threads`<sup>Required</sup> <a name="innodb_read_io_threads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreads"></a>

```python
innodb_read_io_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_rollback_on_timeout`<sup>Required</sup> <a name="innodb_rollback_on_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeout"></a>

```python
innodb_rollback_on_timeout: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `innodb_thread_concurrency`<sup>Required</sup> <a name="innodb_thread_concurrency" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrency"></a>

```python
innodb_thread_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_write_io_threads`<sup>Required</sup> <a name="innodb_write_io_threads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreads"></a>

```python
innodb_write_io_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interactive_timeout`<sup>Required</sup> <a name="interactive_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeout"></a>

```python
interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_tmp_mem_storage_engine`<sup>Required</sup> <a name="internal_tmp_mem_storage_engine" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngine"></a>

```python
internal_tmp_mem_storage_engine: str
```

- *Type:* str

---

##### `ip_filter`<sup>Required</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilter"></a>

```python
ip_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_output`<sup>Required</sup> <a name="log_output" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.logOutput"></a>

```python
log_output: str
```

- *Type:* str

---

##### `long_query_time`<sup>Required</sup> <a name="long_query_time" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTime"></a>

```python
long_query_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_allowed_packet`<sup>Required</sup> <a name="max_allowed_packet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacket"></a>

```python
max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_heap_table_size`<sup>Required</sup> <a name="max_heap_table_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSize"></a>

```python
max_heap_table_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_buffer_length`<sup>Required</sup> <a name="net_buffer_length" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLength"></a>

```python
net_buffer_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_read_timeout`<sup>Required</sup> <a name="net_read_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeout"></a>

```python
net_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_write_timeout`<sup>Required</sup> <a name="net_write_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeout"></a>

```python
net_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_access`<sup>Required</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccess"></a>

```python
public_access: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `service_log`<sup>Required</sup> <a name="service_log" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLog"></a>

```python
service_log: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `slow_query_log`<sup>Required</sup> <a name="slow_query_log" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLog"></a>

```python
slow_query_log: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `sort_buffer_size`<sup>Required</sup> <a name="sort_buffer_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSize"></a>

```python
sort_buffer_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_mode`<sup>Required</sup> <a name="sql_mode" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlMode"></a>

```python
sql_mode: str
```

- *Type:* str

---

##### `sql_require_primary_key`<sup>Required</sup> <a name="sql_require_primary_key" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKey"></a>

```python
sql_require_primary_key: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tmp_table_size`<sup>Required</sup> <a name="tmp_table_size" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSize"></a>

```python
tmp_table_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `wait_timeout`<sup>Required</sup> <a name="wait_timeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeout"></a>

```python
wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseMysqlProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

---



