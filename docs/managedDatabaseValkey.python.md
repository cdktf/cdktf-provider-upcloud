# `managedDatabaseValkey` Submodule <a name="`managedDatabaseValkey` Submodule" id="@cdktf/provider-upcloud.managedDatabaseValkey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseValkey <a name="ManagedDatabaseValkey" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey upcloud_managed_database_valkey}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkey(
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
  network: IResolvable | typing.List[ManagedDatabaseValkeyNetwork] = None,
  powered: bool | IResolvable = None,
  properties: ManagedDatabaseValkeyProperties = None,
  termination_protection: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.plan">plan</a></code> | <code>str</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.title">title</a></code> | <code>str</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.additionalDiskSpaceGib">additional_disk_space_gib</a></code> | <code>typing.Union[int, float]</code> | Not supported for `valkey` databases. Should be left unconfigured. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.network">network</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>]</code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.powered">powered</a></code> | <code>bool \| cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.terminationProtection">termination_protection</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.name"></a>

- *Type:* str

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.plan"></a>

- *Type:* str

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans valkey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#plan ManagedDatabaseValkey#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.title"></a>

- *Type:* str

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#title ManagedDatabaseValkey#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.zone"></a>

- *Type:* str

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#zone ManagedDatabaseValkey#zone}

---

##### `additional_disk_space_gib`<sup>Optional</sup> <a name="additional_disk_space_gib" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.additionalDiskSpaceGib"></a>

- *Type:* typing.Union[int, float]

Not supported for `valkey` databases. Should be left unconfigured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#additional_disk_space_gib ManagedDatabaseValkey#additional_disk_space_gib}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#labels ManagedDatabaseValkey#labels}

---

##### `maintenance_window_dow`<sup>Optional</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.maintenanceWindowDow"></a>

- *Type:* str

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#maintenance_window_dow ManagedDatabaseValkey#maintenance_window_dow}

---

##### `maintenance_window_time`<sup>Optional</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.maintenanceWindowTime"></a>

- *Type:* str

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#maintenance_window_time ManagedDatabaseValkey#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.network"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#network ManagedDatabaseValkey#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.powered"></a>

- *Type:* bool | cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#powered ManagedDatabaseValkey#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#properties ManagedDatabaseValkey#properties}

---

##### `termination_protection`<sup>Optional</sup> <a name="termination_protection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.terminationProtection"></a>

- *Type:* bool | cdktf.IResolvable

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#termination_protection ManagedDatabaseValkey#termination_protection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetAdditionalDiskSpaceGib">reset_additional_disk_space_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowDow">reset_maintenance_window_dow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowTime">reset_maintenance_window_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetPowered">reset_powered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetTerminationProtection">reset_termination_protection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_network` <a name="put_network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putNetwork"></a>

```python
def put_network(
  value: IResolvable | typing.List[ManagedDatabaseValkeyNetwork]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>]

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties"></a>

```python
def put_properties(
  automatic_utility_network_ip_filter: bool | IResolvable = None,
  backup_hour: typing.Union[int, float] = None,
  backup_minute: typing.Union[int, float] = None,
  frequent_snapshots: bool | IResolvable = None,
  ip_filter: typing.List[str] = None,
  migration: ManagedDatabaseValkeyPropertiesMigration = None,
  public_access: bool | IResolvable = None,
  service_log: bool | IResolvable = None,
  valkey_acl_channels_default: str = None,
  valkey_active_expire_effort: typing.Union[int, float] = None,
  valkey_io_threads: typing.Union[int, float] = None,
  valkey_lfu_decay_time: typing.Union[int, float] = None,
  valkey_lfu_log_factor: typing.Union[int, float] = None,
  valkey_maxmemory_policy: str = None,
  valkey_notify_keyspace_events: str = None,
  valkey_number_of_databases: typing.Union[int, float] = None,
  valkey_persistence: str = None,
  valkey_pubsub_client_output_buffer_limit: typing.Union[int, float] = None,
  valkey_ssl: bool | IResolvable = None,
  valkey_timeout: typing.Union[int, float] = None
) -> None
```

###### `automatic_utility_network_ip_filter`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.automaticUtilityNetworkIpFilter"></a>

- *Type:* bool | cdktf.IResolvable

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#automatic_utility_network_ip_filter ManagedDatabaseValkey#automatic_utility_network_ip_filter}

---

###### `backup_hour`<sup>Optional</sup> <a name="backup_hour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.backupHour"></a>

- *Type:* typing.Union[int, float]

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#backup_hour ManagedDatabaseValkey#backup_hour}

---

###### `backup_minute`<sup>Optional</sup> <a name="backup_minute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.backupMinute"></a>

- *Type:* typing.Union[int, float]

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#backup_minute ManagedDatabaseValkey#backup_minute}

---

###### `frequent_snapshots`<sup>Optional</sup> <a name="frequent_snapshots" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.frequentSnapshots"></a>

- *Type:* bool | cdktf.IResolvable

Frequent RDB snapshots.

When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when `valkey_persistence` is set to `off`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#frequent_snapshots ManagedDatabaseValkey#frequent_snapshots}

---

###### `ip_filter`<sup>Optional</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.ipFilter"></a>

- *Type:* typing.List[str]

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#ip_filter ManagedDatabaseValkey#ip_filter}

---

###### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.migration"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#migration ManagedDatabaseValkey#migration}

---

###### `public_access`<sup>Optional</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.publicAccess"></a>

- *Type:* bool | cdktf.IResolvable

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#public_access ManagedDatabaseValkey#public_access}

---

###### `service_log`<sup>Optional</sup> <a name="service_log" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.serviceLog"></a>

- *Type:* bool | cdktf.IResolvable

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#service_log ManagedDatabaseValkey#service_log}

---

###### `valkey_acl_channels_default`<sup>Optional</sup> <a name="valkey_acl_channels_default" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeyAclChannelsDefault"></a>

- *Type:* str

Default ACL for pub/sub channels used when a Valkey user is created.

Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_acl_channels_default ManagedDatabaseValkey#valkey_acl_channels_default}

---

###### `valkey_active_expire_effort`<sup>Optional</sup> <a name="valkey_active_expire_effort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeyActiveExpireEffort"></a>

- *Type:* typing.Union[int, float]

Active expire effort.

Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_active_expire_effort ManagedDatabaseValkey#valkey_active_expire_effort}

---

###### `valkey_io_threads`<sup>Optional</sup> <a name="valkey_io_threads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeyIoThreads"></a>

- *Type:* typing.Union[int, float]

Valkey IO thread count. Set Valkey IO thread count. Changing this will cause a restart of the Valkey service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_io_threads ManagedDatabaseValkey#valkey_io_threads}

---

###### `valkey_lfu_decay_time`<sup>Optional</sup> <a name="valkey_lfu_decay_time" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeyLfuDecayTime"></a>

- *Type:* typing.Union[int, float]

LFU maxmemory-policy counter decay time in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_lfu_decay_time ManagedDatabaseValkey#valkey_lfu_decay_time}

---

###### `valkey_lfu_log_factor`<sup>Optional</sup> <a name="valkey_lfu_log_factor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeyLfuLogFactor"></a>

- *Type:* typing.Union[int, float]

Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_lfu_log_factor ManagedDatabaseValkey#valkey_lfu_log_factor}

---

###### `valkey_maxmemory_policy`<sup>Optional</sup> <a name="valkey_maxmemory_policy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeyMaxmemoryPolicy"></a>

- *Type:* str

Valkey maxmemory-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_maxmemory_policy ManagedDatabaseValkey#valkey_maxmemory_policy}

---

###### `valkey_notify_keyspace_events`<sup>Optional</sup> <a name="valkey_notify_keyspace_events" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeyNotifyKeyspaceEvents"></a>

- *Type:* str

Set notify-keyspace-events option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_notify_keyspace_events ManagedDatabaseValkey#valkey_notify_keyspace_events}

---

###### `valkey_number_of_databases`<sup>Optional</sup> <a name="valkey_number_of_databases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeyNumberOfDatabases"></a>

- *Type:* typing.Union[int, float]

Number of Valkey databases. Set number of Valkey databases. Changing this will cause a restart of the Valkey service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_number_of_databases ManagedDatabaseValkey#valkey_number_of_databases}

---

###### `valkey_persistence`<sup>Optional</sup> <a name="valkey_persistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeyPersistence"></a>

- *Type:* str

Valkey persistence.

When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_persistence ManagedDatabaseValkey#valkey_persistence}

---

###### `valkey_pubsub_client_output_buffer_limit`<sup>Optional</sup> <a name="valkey_pubsub_client_output_buffer_limit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeyPubsubClientOutputBufferLimit"></a>

- *Type:* typing.Union[int, float]

Pub/sub client output buffer hard limit in MB.

Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_pubsub_client_output_buffer_limit ManagedDatabaseValkey#valkey_pubsub_client_output_buffer_limit}

---

###### `valkey_ssl`<sup>Optional</sup> <a name="valkey_ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeySsl"></a>

- *Type:* bool | cdktf.IResolvable

Require SSL to access Valkey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_ssl ManagedDatabaseValkey#valkey_ssl}

---

###### `valkey_timeout`<sup>Optional</sup> <a name="valkey_timeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.valkeyTimeout"></a>

- *Type:* typing.Union[int, float]

Valkey idle connection timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_timeout ManagedDatabaseValkey#valkey_timeout}

---

##### `reset_additional_disk_space_gib` <a name="reset_additional_disk_space_gib" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetAdditionalDiskSpaceGib"></a>

```python
def reset_additional_disk_space_gib() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_maintenance_window_dow` <a name="reset_maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowDow"></a>

```python
def reset_maintenance_window_dow() -> None
```

##### `reset_maintenance_window_time` <a name="reset_maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowTime"></a>

```python
def reset_maintenance_window_time() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_powered` <a name="reset_powered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetPowered"></a>

```python
def reset_powered() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_termination_protection` <a name="reset_termination_protection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetTerminationProtection"></a>

```python
def reset_termination_protection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagedDatabaseValkey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagedDatabaseValkey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedDatabaseValkey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedDatabaseValkey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseValkey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.components">components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList">ManagedDatabaseValkeyComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.network">network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList">ManagedDatabaseValkeyNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nodeStates">node_states</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList">ManagedDatabaseValkeyNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.primaryDatabase">primary_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference">ManagedDatabaseValkeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceHost">service_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePassword">service_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePort">service_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUri">service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUsername">service_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.additionalDiskSpaceGibInput">additional_disk_space_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDowInput">maintenance_window_dow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTimeInput">maintenance_window_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.networkInput">network_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.poweredInput">powered_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtectionInput">termination_protection_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.additionalDiskSpaceGib">additional_disk_space_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.powered">powered</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtection">termination_protection</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.components"></a>

```python
components: ManagedDatabaseValkeyComponentsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList">ManagedDatabaseValkeyComponentsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.network"></a>

```python
network: ManagedDatabaseValkeyNetworkList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList">ManagedDatabaseValkeyNetworkList</a>

---

##### `node_states`<sup>Required</sup> <a name="node_states" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nodeStates"></a>

```python
node_states: ManagedDatabaseValkeyNodeStatesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList">ManagedDatabaseValkeyNodeStatesList</a>

---

##### `primary_database`<sup>Required</sup> <a name="primary_database" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.primaryDatabase"></a>

```python
primary_database: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.properties"></a>

```python
properties: ManagedDatabaseValkeyPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference">ManagedDatabaseValkeyPropertiesOutputReference</a>

---

##### `service_host`<sup>Required</sup> <a name="service_host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceHost"></a>

```python
service_host: str
```

- *Type:* str

---

##### `service_password`<sup>Required</sup> <a name="service_password" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePassword"></a>

```python
service_password: str
```

- *Type:* str

---

##### `service_port`<sup>Required</sup> <a name="service_port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePort"></a>

```python
service_port: str
```

- *Type:* str

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

---

##### `service_username`<sup>Required</sup> <a name="service_username" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUsername"></a>

```python
service_username: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `additional_disk_space_gib_input`<sup>Optional</sup> <a name="additional_disk_space_gib_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.additionalDiskSpaceGibInput"></a>

```python
additional_disk_space_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `maintenance_window_dow_input`<sup>Optional</sup> <a name="maintenance_window_dow_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDowInput"></a>

```python
maintenance_window_dow_input: str
```

- *Type:* str

---

##### `maintenance_window_time_input`<sup>Optional</sup> <a name="maintenance_window_time_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTimeInput"></a>

```python
maintenance_window_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.networkInput"></a>

```python
network_input: IResolvable | typing.List[ManagedDatabaseValkeyNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>]

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `powered_input`<sup>Optional</sup> <a name="powered_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.poweredInput"></a>

```python
powered_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.propertiesInput"></a>

```python
properties_input: ManagedDatabaseValkeyProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

---

##### `termination_protection_input`<sup>Optional</sup> <a name="termination_protection_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtectionInput"></a>

```python
termination_protection_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `additional_disk_space_gib`<sup>Required</sup> <a name="additional_disk_space_gib" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.additionalDiskSpaceGib"></a>

```python
additional_disk_space_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `maintenance_window_dow`<sup>Required</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDow"></a>

```python
maintenance_window_dow: str
```

- *Type:* str

---

##### `maintenance_window_time`<sup>Required</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTime"></a>

```python
maintenance_window_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `powered`<sup>Required</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.powered"></a>

```python
powered: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `termination_protection`<sup>Required</sup> <a name="termination_protection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtection"></a>

```python
termination_protection: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseValkeyComponents <a name="ManagedDatabaseValkeyComponents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyComponents()
```


### ManagedDatabaseValkeyConfig <a name="ManagedDatabaseValkeyConfig" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyConfig(
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
  network: IResolvable | typing.List[ManagedDatabaseValkeyNetwork] = None,
  powered: bool | IResolvable = None,
  properties: ManagedDatabaseValkeyProperties = None,
  termination_protection: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.name">name</a></code> | <code>str</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.plan">plan</a></code> | <code>str</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.title">title</a></code> | <code>str</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.zone">zone</a></code> | <code>str</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.additionalDiskSpaceGib">additional_disk_space_gib</a></code> | <code>typing.Union[int, float]</code> | Not supported for `valkey` databases. Should be left unconfigured. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowDow">maintenance_window_dow</a></code> | <code>str</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.network">network</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>]</code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.powered">powered</a></code> | <code>bool \| cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.terminationProtection">termination_protection</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.plan"></a>

```python
plan: str
```

- *Type:* str

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans valkey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#plan ManagedDatabaseValkey#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#title ManagedDatabaseValkey#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#zone ManagedDatabaseValkey#zone}

---

##### `additional_disk_space_gib`<sup>Optional</sup> <a name="additional_disk_space_gib" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.additionalDiskSpaceGib"></a>

```python
additional_disk_space_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Not supported for `valkey` databases. Should be left unconfigured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#additional_disk_space_gib ManagedDatabaseValkey#additional_disk_space_gib}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#labels ManagedDatabaseValkey#labels}

---

##### `maintenance_window_dow`<sup>Optional</sup> <a name="maintenance_window_dow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowDow"></a>

```python
maintenance_window_dow: str
```

- *Type:* str

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#maintenance_window_dow ManagedDatabaseValkey#maintenance_window_dow}

---

##### `maintenance_window_time`<sup>Optional</sup> <a name="maintenance_window_time" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowTime"></a>

```python
maintenance_window_time: str
```

- *Type:* str

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#maintenance_window_time ManagedDatabaseValkey#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.network"></a>

```python
network: IResolvable | typing.List[ManagedDatabaseValkeyNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#network ManagedDatabaseValkey#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.powered"></a>

```python
powered: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#powered ManagedDatabaseValkey#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.properties"></a>

```python
properties: ManagedDatabaseValkeyProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#properties ManagedDatabaseValkey#properties}

---

##### `termination_protection`<sup>Optional</sup> <a name="termination_protection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.terminationProtection"></a>

```python
termination_protection: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#termination_protection ManagedDatabaseValkey#termination_protection}

---

### ManagedDatabaseValkeyNetwork <a name="ManagedDatabaseValkeyNetwork" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyNetwork(
  family: str,
  name: str,
  type: str,
  uuid: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.family">family</a></code> | <code>str</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.name">name</a></code> | <code>str</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.type">type</a></code> | <code>str</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.uuid">uuid</a></code> | <code>str</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.family"></a>

```python
family: str
```

- *Type:* str

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#family ManagedDatabaseValkey#family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#type ManagedDatabaseValkey#type}

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#uuid ManagedDatabaseValkey#uuid}

---

### ManagedDatabaseValkeyNodeStates <a name="ManagedDatabaseValkeyNodeStates" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyNodeStates()
```


### ManagedDatabaseValkeyProperties <a name="ManagedDatabaseValkeyProperties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyProperties(
  automatic_utility_network_ip_filter: bool | IResolvable = None,
  backup_hour: typing.Union[int, float] = None,
  backup_minute: typing.Union[int, float] = None,
  frequent_snapshots: bool | IResolvable = None,
  ip_filter: typing.List[str] = None,
  migration: ManagedDatabaseValkeyPropertiesMigration = None,
  public_access: bool | IResolvable = None,
  service_log: bool | IResolvable = None,
  valkey_acl_channels_default: str = None,
  valkey_active_expire_effort: typing.Union[int, float] = None,
  valkey_io_threads: typing.Union[int, float] = None,
  valkey_lfu_decay_time: typing.Union[int, float] = None,
  valkey_lfu_log_factor: typing.Union[int, float] = None,
  valkey_maxmemory_policy: str = None,
  valkey_notify_keyspace_events: str = None,
  valkey_number_of_databases: typing.Union[int, float] = None,
  valkey_persistence: str = None,
  valkey_pubsub_client_output_buffer_limit: typing.Union[int, float] = None,
  valkey_ssl: bool | IResolvable = None,
  valkey_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.automaticUtilityNetworkIpFilter">automatic_utility_network_ip_filter</a></code> | <code>bool \| cdktf.IResolvable</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.frequentSnapshots">frequent_snapshots</a></code> | <code>bool \| cdktf.IResolvable</code> | Frequent RDB snapshots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.ipFilter">ip_filter</a></code> | <code>typing.List[str]</code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.publicAccess">public_access</a></code> | <code>bool \| cdktf.IResolvable</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.serviceLog">service_log</a></code> | <code>bool \| cdktf.IResolvable</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyAclChannelsDefault">valkey_acl_channels_default</a></code> | <code>str</code> | Default ACL for pub/sub channels used when a Valkey user is created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyActiveExpireEffort">valkey_active_expire_effort</a></code> | <code>typing.Union[int, float]</code> | Active expire effort. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyIoThreads">valkey_io_threads</a></code> | <code>typing.Union[int, float]</code> | Valkey IO thread count. Set Valkey IO thread count. Changing this will cause a restart of the Valkey service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuDecayTime">valkey_lfu_decay_time</a></code> | <code>typing.Union[int, float]</code> | LFU maxmemory-policy counter decay time in minutes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuLogFactor">valkey_lfu_log_factor</a></code> | <code>typing.Union[int, float]</code> | Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyMaxmemoryPolicy">valkey_maxmemory_policy</a></code> | <code>str</code> | Valkey maxmemory-policy. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNotifyKeyspaceEvents">valkey_notify_keyspace_events</a></code> | <code>str</code> | Set notify-keyspace-events option. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNumberOfDatabases">valkey_number_of_databases</a></code> | <code>typing.Union[int, float]</code> | Number of Valkey databases. Set number of Valkey databases. Changing this will cause a restart of the Valkey service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPersistence">valkey_persistence</a></code> | <code>str</code> | Valkey persistence. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPubsubClientOutputBufferLimit">valkey_pubsub_client_output_buffer_limit</a></code> | <code>typing.Union[int, float]</code> | Pub/sub client output buffer hard limit in MB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeySsl">valkey_ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | Require SSL to access Valkey. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyTimeout">valkey_timeout</a></code> | <code>typing.Union[int, float]</code> | Valkey idle connection timeout in seconds. |

---

##### `automatic_utility_network_ip_filter`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.automaticUtilityNetworkIpFilter"></a>

```python
automatic_utility_network_ip_filter: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#automatic_utility_network_ip_filter ManagedDatabaseValkey#automatic_utility_network_ip_filter}

---

##### `backup_hour`<sup>Optional</sup> <a name="backup_hour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupHour"></a>

```python
backup_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#backup_hour ManagedDatabaseValkey#backup_hour}

---

##### `backup_minute`<sup>Optional</sup> <a name="backup_minute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupMinute"></a>

```python
backup_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#backup_minute ManagedDatabaseValkey#backup_minute}

---

##### `frequent_snapshots`<sup>Optional</sup> <a name="frequent_snapshots" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.frequentSnapshots"></a>

```python
frequent_snapshots: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Frequent RDB snapshots.

When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when `valkey_persistence` is set to `off`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#frequent_snapshots ManagedDatabaseValkey#frequent_snapshots}

---

##### `ip_filter`<sup>Optional</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.ipFilter"></a>

```python
ip_filter: typing.List[str]
```

- *Type:* typing.List[str]

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#ip_filter ManagedDatabaseValkey#ip_filter}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.migration"></a>

```python
migration: ManagedDatabaseValkeyPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#migration ManagedDatabaseValkey#migration}

---

##### `public_access`<sup>Optional</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.publicAccess"></a>

```python
public_access: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#public_access ManagedDatabaseValkey#public_access}

---

##### `service_log`<sup>Optional</sup> <a name="service_log" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.serviceLog"></a>

```python
service_log: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#service_log ManagedDatabaseValkey#service_log}

---

##### `valkey_acl_channels_default`<sup>Optional</sup> <a name="valkey_acl_channels_default" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyAclChannelsDefault"></a>

```python
valkey_acl_channels_default: str
```

- *Type:* str

Default ACL for pub/sub channels used when a Valkey user is created.

Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_acl_channels_default ManagedDatabaseValkey#valkey_acl_channels_default}

---

##### `valkey_active_expire_effort`<sup>Optional</sup> <a name="valkey_active_expire_effort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyActiveExpireEffort"></a>

```python
valkey_active_expire_effort: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Active expire effort.

Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_active_expire_effort ManagedDatabaseValkey#valkey_active_expire_effort}

---

##### `valkey_io_threads`<sup>Optional</sup> <a name="valkey_io_threads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyIoThreads"></a>

```python
valkey_io_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Valkey IO thread count. Set Valkey IO thread count. Changing this will cause a restart of the Valkey service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_io_threads ManagedDatabaseValkey#valkey_io_threads}

---

##### `valkey_lfu_decay_time`<sup>Optional</sup> <a name="valkey_lfu_decay_time" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuDecayTime"></a>

```python
valkey_lfu_decay_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

LFU maxmemory-policy counter decay time in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_lfu_decay_time ManagedDatabaseValkey#valkey_lfu_decay_time}

---

##### `valkey_lfu_log_factor`<sup>Optional</sup> <a name="valkey_lfu_log_factor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuLogFactor"></a>

```python
valkey_lfu_log_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_lfu_log_factor ManagedDatabaseValkey#valkey_lfu_log_factor}

---

##### `valkey_maxmemory_policy`<sup>Optional</sup> <a name="valkey_maxmemory_policy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyMaxmemoryPolicy"></a>

```python
valkey_maxmemory_policy: str
```

- *Type:* str

Valkey maxmemory-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_maxmemory_policy ManagedDatabaseValkey#valkey_maxmemory_policy}

---

##### `valkey_notify_keyspace_events`<sup>Optional</sup> <a name="valkey_notify_keyspace_events" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNotifyKeyspaceEvents"></a>

```python
valkey_notify_keyspace_events: str
```

- *Type:* str

Set notify-keyspace-events option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_notify_keyspace_events ManagedDatabaseValkey#valkey_notify_keyspace_events}

---

##### `valkey_number_of_databases`<sup>Optional</sup> <a name="valkey_number_of_databases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNumberOfDatabases"></a>

```python
valkey_number_of_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of Valkey databases. Set number of Valkey databases. Changing this will cause a restart of the Valkey service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_number_of_databases ManagedDatabaseValkey#valkey_number_of_databases}

---

##### `valkey_persistence`<sup>Optional</sup> <a name="valkey_persistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPersistence"></a>

```python
valkey_persistence: str
```

- *Type:* str

Valkey persistence.

When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_persistence ManagedDatabaseValkey#valkey_persistence}

---

##### `valkey_pubsub_client_output_buffer_limit`<sup>Optional</sup> <a name="valkey_pubsub_client_output_buffer_limit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPubsubClientOutputBufferLimit"></a>

```python
valkey_pubsub_client_output_buffer_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Pub/sub client output buffer hard limit in MB.

Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_pubsub_client_output_buffer_limit ManagedDatabaseValkey#valkey_pubsub_client_output_buffer_limit}

---

##### `valkey_ssl`<sup>Optional</sup> <a name="valkey_ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeySsl"></a>

```python
valkey_ssl: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Require SSL to access Valkey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_ssl ManagedDatabaseValkey#valkey_ssl}

---

##### `valkey_timeout`<sup>Optional</sup> <a name="valkey_timeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyTimeout"></a>

```python
valkey_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Valkey idle connection timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#valkey_timeout ManagedDatabaseValkey#valkey_timeout}

---

### ManagedDatabaseValkeyPropertiesMigration <a name="ManagedDatabaseValkeyPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration(
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
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.dbname">dbname</a></code> | <code>str</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.host">host</a></code> | <code>str</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreDbs">ignore_dbs</a></code> | <code>str</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreRoles">ignore_roles</a></code> | <code>str</code> | Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.method">method</a></code> | <code>str</code> | The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.password">password</a></code> | <code>str</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ssl">ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.username">username</a></code> | <code>str</code> | User name for authentication with the server where to migrate data from. |

---

##### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.dbname"></a>

```python
dbname: str
```

- *Type:* str

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#dbname ManagedDatabaseValkey#dbname}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.host"></a>

```python
host: str
```

- *Type:* str

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#host ManagedDatabaseValkey#host}

---

##### `ignore_dbs`<sup>Optional</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreDbs"></a>

```python
ignore_dbs: str
```

- *Type:* str

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#ignore_dbs ManagedDatabaseValkey#ignore_dbs}

---

##### `ignore_roles`<sup>Optional</sup> <a name="ignore_roles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreRoles"></a>

```python
ignore_roles: str
```

- *Type:* str

Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#ignore_roles ManagedDatabaseValkey#ignore_roles}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.method"></a>

```python
method: str
```

- *Type:* str

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#method ManagedDatabaseValkey#method}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.password"></a>

```python
password: str
```

- *Type:* str

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#password ManagedDatabaseValkey#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#port ManagedDatabaseValkey#port}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ssl"></a>

```python
ssl: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#ssl ManagedDatabaseValkey#ssl}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.username"></a>

```python
username: str
```

- *Type:* str

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#username ManagedDatabaseValkey#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseValkeyComponentsList <a name="ManagedDatabaseValkeyComponentsList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDatabaseValkeyComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagedDatabaseValkeyComponentsOutputReference <a name="ManagedDatabaseValkeyComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.route">route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.usage">usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents">ManagedDatabaseValkeyComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.route"></a>

```python
route: str
```

- *Type:* str

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.usage"></a>

```python
usage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseValkeyComponents
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents">ManagedDatabaseValkeyComponents</a>

---


### ManagedDatabaseValkeyNetworkList <a name="ManagedDatabaseValkeyNetworkList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyNetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDatabaseValkeyNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDatabaseValkeyNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>]

---


### ManagedDatabaseValkeyNetworkOutputReference <a name="ManagedDatabaseValkeyNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDatabaseValkeyNetwork
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>

---


### ManagedDatabaseValkeyNodeStatesList <a name="ManagedDatabaseValkeyNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDatabaseValkeyNodeStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagedDatabaseValkeyNodeStatesOutputReference <a name="ManagedDatabaseValkeyNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates">ManagedDatabaseValkeyNodeStates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseValkeyNodeStates
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates">ManagedDatabaseValkeyNodeStates</a>

---


### ManagedDatabaseValkeyPropertiesMigrationOutputReference <a name="ManagedDatabaseValkeyPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetDbname">reset_dbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreDbs">reset_ignore_dbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreRoles">reset_ignore_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetSsl">reset_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dbname` <a name="reset_dbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetDbname"></a>

```python
def reset_dbname() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_ignore_dbs` <a name="reset_ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```python
def reset_ignore_dbs() -> None
```

##### `reset_ignore_roles` <a name="reset_ignore_roles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreRoles"></a>

```python
def reset_ignore_roles() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetSsl"></a>

```python
def reset_ssl() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbnameInput">dbname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbsInput">ignore_dbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRolesInput">ignore_roles_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.sslInput">ssl_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbname">dbname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbs">ignore_dbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRoles">ignore_roles</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ssl">ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbname_input`<sup>Optional</sup> <a name="dbname_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbnameInput"></a>

```python
dbname_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `ignore_dbs_input`<sup>Optional</sup> <a name="ignore_dbs_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```python
ignore_dbs_input: str
```

- *Type:* str

---

##### `ignore_roles_input`<sup>Optional</sup> <a name="ignore_roles_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRolesInput"></a>

```python
ignore_roles_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.sslInput"></a>

```python
ssl_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `dbname`<sup>Required</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbname"></a>

```python
dbname: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ignore_dbs`<sup>Required</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```python
ignore_dbs: str
```

- *Type:* str

---

##### `ignore_roles`<sup>Required</sup> <a name="ignore_roles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRoles"></a>

```python
ignore_roles: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ssl"></a>

```python
ssl: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseValkeyPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

---


### ManagedDatabaseValkeyPropertiesOutputReference <a name="ManagedDatabaseValkeyPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_valkey

managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration">put_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">reset_automatic_utility_network_ip_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupHour">reset_backup_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupMinute">reset_backup_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetFrequentSnapshots">reset_frequent_snapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetIpFilter">reset_ip_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetMigration">reset_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetPublicAccess">reset_public_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetServiceLog">reset_service_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyAclChannelsDefault">reset_valkey_acl_channels_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyActiveExpireEffort">reset_valkey_active_expire_effort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyIoThreads">reset_valkey_io_threads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuDecayTime">reset_valkey_lfu_decay_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuLogFactor">reset_valkey_lfu_log_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyMaxmemoryPolicy">reset_valkey_maxmemory_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNotifyKeyspaceEvents">reset_valkey_notify_keyspace_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNumberOfDatabases">reset_valkey_number_of_databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPersistence">reset_valkey_persistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPubsubClientOutputBufferLimit">reset_valkey_pubsub_client_output_buffer_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeySsl">reset_valkey_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyTimeout">reset_valkey_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_migration` <a name="put_migration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration"></a>

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

###### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.dbname"></a>

- *Type:* str

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#dbname ManagedDatabaseValkey#dbname}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.host"></a>

- *Type:* str

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#host ManagedDatabaseValkey#host}

---

###### `ignore_dbs`<sup>Optional</sup> <a name="ignore_dbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.ignoreDbs"></a>

- *Type:* str

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#ignore_dbs ManagedDatabaseValkey#ignore_dbs}

---

###### `ignore_roles`<sup>Optional</sup> <a name="ignore_roles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.ignoreRoles"></a>

- *Type:* str

Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#ignore_roles ManagedDatabaseValkey#ignore_roles}

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.method"></a>

- *Type:* str

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#method ManagedDatabaseValkey#method}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.password"></a>

- *Type:* str

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#password ManagedDatabaseValkey#password}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#port ManagedDatabaseValkey#port}

---

###### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.ssl"></a>

- *Type:* bool | cdktf.IResolvable

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#ssl ManagedDatabaseValkey#ssl}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.username"></a>

- *Type:* str

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_database_valkey#username ManagedDatabaseValkey#username}

---

##### `reset_automatic_utility_network_ip_filter` <a name="reset_automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```python
def reset_automatic_utility_network_ip_filter() -> None
```

##### `reset_backup_hour` <a name="reset_backup_hour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupHour"></a>

```python
def reset_backup_hour() -> None
```

##### `reset_backup_minute` <a name="reset_backup_minute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupMinute"></a>

```python
def reset_backup_minute() -> None
```

##### `reset_frequent_snapshots` <a name="reset_frequent_snapshots" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetFrequentSnapshots"></a>

```python
def reset_frequent_snapshots() -> None
```

##### `reset_ip_filter` <a name="reset_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetIpFilter"></a>

```python
def reset_ip_filter() -> None
```

##### `reset_migration` <a name="reset_migration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetMigration"></a>

```python
def reset_migration() -> None
```

##### `reset_public_access` <a name="reset_public_access" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetPublicAccess"></a>

```python
def reset_public_access() -> None
```

##### `reset_service_log` <a name="reset_service_log" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetServiceLog"></a>

```python
def reset_service_log() -> None
```

##### `reset_valkey_acl_channels_default` <a name="reset_valkey_acl_channels_default" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyAclChannelsDefault"></a>

```python
def reset_valkey_acl_channels_default() -> None
```

##### `reset_valkey_active_expire_effort` <a name="reset_valkey_active_expire_effort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyActiveExpireEffort"></a>

```python
def reset_valkey_active_expire_effort() -> None
```

##### `reset_valkey_io_threads` <a name="reset_valkey_io_threads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyIoThreads"></a>

```python
def reset_valkey_io_threads() -> None
```

##### `reset_valkey_lfu_decay_time` <a name="reset_valkey_lfu_decay_time" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuDecayTime"></a>

```python
def reset_valkey_lfu_decay_time() -> None
```

##### `reset_valkey_lfu_log_factor` <a name="reset_valkey_lfu_log_factor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuLogFactor"></a>

```python
def reset_valkey_lfu_log_factor() -> None
```

##### `reset_valkey_maxmemory_policy` <a name="reset_valkey_maxmemory_policy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyMaxmemoryPolicy"></a>

```python
def reset_valkey_maxmemory_policy() -> None
```

##### `reset_valkey_notify_keyspace_events` <a name="reset_valkey_notify_keyspace_events" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNotifyKeyspaceEvents"></a>

```python
def reset_valkey_notify_keyspace_events() -> None
```

##### `reset_valkey_number_of_databases` <a name="reset_valkey_number_of_databases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNumberOfDatabases"></a>

```python
def reset_valkey_number_of_databases() -> None
```

##### `reset_valkey_persistence` <a name="reset_valkey_persistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPersistence"></a>

```python
def reset_valkey_persistence() -> None
```

##### `reset_valkey_pubsub_client_output_buffer_limit` <a name="reset_valkey_pubsub_client_output_buffer_limit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPubsubClientOutputBufferLimit"></a>

```python
def reset_valkey_pubsub_client_output_buffer_limit() -> None
```

##### `reset_valkey_ssl` <a name="reset_valkey_ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeySsl"></a>

```python
def reset_valkey_ssl() -> None
```

##### `reset_valkey_timeout` <a name="reset_valkey_timeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyTimeout"></a>

```python
def reset_valkey_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference">ManagedDatabaseValkeyPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">automatic_utility_network_ip_filter_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHourInput">backup_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinuteInput">backup_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshotsInput">frequent_snapshots_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilterInput">ip_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migrationInput">migration_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccessInput">public_access_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLogInput">service_log_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefaultInput">valkey_acl_channels_default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffortInput">valkey_active_expire_effort_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreadsInput">valkey_io_threads_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTimeInput">valkey_lfu_decay_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactorInput">valkey_lfu_log_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicyInput">valkey_maxmemory_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEventsInput">valkey_notify_keyspace_events_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabasesInput">valkey_number_of_databases_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistenceInput">valkey_persistence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimitInput">valkey_pubsub_client_output_buffer_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySslInput">valkey_ssl_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeoutInput">valkey_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">automatic_utility_network_ip_filter</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHour">backup_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinute">backup_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshots">frequent_snapshots</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilter">ip_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccess">public_access</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLog">service_log</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefault">valkey_acl_channels_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffort">valkey_active_expire_effort</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreads">valkey_io_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTime">valkey_lfu_decay_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactor">valkey_lfu_log_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicy">valkey_maxmemory_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEvents">valkey_notify_keyspace_events</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabases">valkey_number_of_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistence">valkey_persistence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimit">valkey_pubsub_client_output_buffer_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySsl">valkey_ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeout">valkey_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migration"></a>

```python
migration: ManagedDatabaseValkeyPropertiesMigrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference">ManagedDatabaseValkeyPropertiesMigrationOutputReference</a>

---

##### `automatic_utility_network_ip_filter_input`<sup>Optional</sup> <a name="automatic_utility_network_ip_filter_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```python
automatic_utility_network_ip_filter_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `backup_hour_input`<sup>Optional</sup> <a name="backup_hour_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHourInput"></a>

```python
backup_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_minute_input`<sup>Optional</sup> <a name="backup_minute_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinuteInput"></a>

```python
backup_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequent_snapshots_input`<sup>Optional</sup> <a name="frequent_snapshots_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshotsInput"></a>

```python
frequent_snapshots_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ip_filter_input`<sup>Optional</sup> <a name="ip_filter_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilterInput"></a>

```python
ip_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `migration_input`<sup>Optional</sup> <a name="migration_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migrationInput"></a>

```python
migration_input: ManagedDatabaseValkeyPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

---

##### `public_access_input`<sup>Optional</sup> <a name="public_access_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccessInput"></a>

```python
public_access_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `service_log_input`<sup>Optional</sup> <a name="service_log_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLogInput"></a>

```python
service_log_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `valkey_acl_channels_default_input`<sup>Optional</sup> <a name="valkey_acl_channels_default_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefaultInput"></a>

```python
valkey_acl_channels_default_input: str
```

- *Type:* str

---

##### `valkey_active_expire_effort_input`<sup>Optional</sup> <a name="valkey_active_expire_effort_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffortInput"></a>

```python
valkey_active_expire_effort_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_io_threads_input`<sup>Optional</sup> <a name="valkey_io_threads_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreadsInput"></a>

```python
valkey_io_threads_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_lfu_decay_time_input`<sup>Optional</sup> <a name="valkey_lfu_decay_time_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTimeInput"></a>

```python
valkey_lfu_decay_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_lfu_log_factor_input`<sup>Optional</sup> <a name="valkey_lfu_log_factor_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactorInput"></a>

```python
valkey_lfu_log_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_maxmemory_policy_input`<sup>Optional</sup> <a name="valkey_maxmemory_policy_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicyInput"></a>

```python
valkey_maxmemory_policy_input: str
```

- *Type:* str

---

##### `valkey_notify_keyspace_events_input`<sup>Optional</sup> <a name="valkey_notify_keyspace_events_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEventsInput"></a>

```python
valkey_notify_keyspace_events_input: str
```

- *Type:* str

---

##### `valkey_number_of_databases_input`<sup>Optional</sup> <a name="valkey_number_of_databases_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabasesInput"></a>

```python
valkey_number_of_databases_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_persistence_input`<sup>Optional</sup> <a name="valkey_persistence_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistenceInput"></a>

```python
valkey_persistence_input: str
```

- *Type:* str

---

##### `valkey_pubsub_client_output_buffer_limit_input`<sup>Optional</sup> <a name="valkey_pubsub_client_output_buffer_limit_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimitInput"></a>

```python
valkey_pubsub_client_output_buffer_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_ssl_input`<sup>Optional</sup> <a name="valkey_ssl_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySslInput"></a>

```python
valkey_ssl_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `valkey_timeout_input`<sup>Optional</sup> <a name="valkey_timeout_input" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeoutInput"></a>

```python
valkey_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `automatic_utility_network_ip_filter`<sup>Required</sup> <a name="automatic_utility_network_ip_filter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```python
automatic_utility_network_ip_filter: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `backup_hour`<sup>Required</sup> <a name="backup_hour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHour"></a>

```python
backup_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_minute`<sup>Required</sup> <a name="backup_minute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinute"></a>

```python
backup_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequent_snapshots`<sup>Required</sup> <a name="frequent_snapshots" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshots"></a>

```python
frequent_snapshots: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ip_filter`<sup>Required</sup> <a name="ip_filter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilter"></a>

```python
ip_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `public_access`<sup>Required</sup> <a name="public_access" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccess"></a>

```python
public_access: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `service_log`<sup>Required</sup> <a name="service_log" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLog"></a>

```python
service_log: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `valkey_acl_channels_default`<sup>Required</sup> <a name="valkey_acl_channels_default" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefault"></a>

```python
valkey_acl_channels_default: str
```

- *Type:* str

---

##### `valkey_active_expire_effort`<sup>Required</sup> <a name="valkey_active_expire_effort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffort"></a>

```python
valkey_active_expire_effort: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_io_threads`<sup>Required</sup> <a name="valkey_io_threads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreads"></a>

```python
valkey_io_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_lfu_decay_time`<sup>Required</sup> <a name="valkey_lfu_decay_time" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTime"></a>

```python
valkey_lfu_decay_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_lfu_log_factor`<sup>Required</sup> <a name="valkey_lfu_log_factor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactor"></a>

```python
valkey_lfu_log_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_maxmemory_policy`<sup>Required</sup> <a name="valkey_maxmemory_policy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicy"></a>

```python
valkey_maxmemory_policy: str
```

- *Type:* str

---

##### `valkey_notify_keyspace_events`<sup>Required</sup> <a name="valkey_notify_keyspace_events" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEvents"></a>

```python
valkey_notify_keyspace_events: str
```

- *Type:* str

---

##### `valkey_number_of_databases`<sup>Required</sup> <a name="valkey_number_of_databases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabases"></a>

```python
valkey_number_of_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_persistence`<sup>Required</sup> <a name="valkey_persistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistence"></a>

```python
valkey_persistence: str
```

- *Type:* str

---

##### `valkey_pubsub_client_output_buffer_limit`<sup>Required</sup> <a name="valkey_pubsub_client_output_buffer_limit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimit"></a>

```python
valkey_pubsub_client_output_buffer_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valkey_ssl`<sup>Required</sup> <a name="valkey_ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySsl"></a>

```python
valkey_ssl: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `valkey_timeout`<sup>Required</sup> <a name="valkey_timeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeout"></a>

```python
valkey_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseValkeyProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

---



