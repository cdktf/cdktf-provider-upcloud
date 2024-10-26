# `managedObjectStorage` Submodule <a name="`managedObjectStorage` Submodule" id="@cdktf/provider-upcloud.managedObjectStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedObjectStorage <a name="ManagedObjectStorage" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage upcloud_managed_object_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configured_status: str,
  name: str,
  region: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: typing.Union[IResolvable, typing.List[ManagedObjectStorageNetwork]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.configuredStatus">configured_status</a></code> | <code>str</code> | Service status managed by the end user. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Managed Object Storage service. Must be unique within account. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.region">region</a></code> | <code>str</code> | Region in which the service will be hosted, see `upcloud_managed_object_storage_regions` data source. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#id ManagedObjectStorage#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User defined key-value pairs to classify the managed object storage. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.network">network</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>]]</code> | network block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configured_status`<sup>Required</sup> <a name="configured_status" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.configuredStatus"></a>

- *Type:* str

Service status managed by the end user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#configured_status ManagedObjectStorage#configured_status}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.name"></a>

- *Type:* str

Name of the Managed Object Storage service. Must be unique within account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#name ManagedObjectStorage#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.region"></a>

- *Type:* str

Region in which the service will be hosted, see `upcloud_managed_object_storage_regions` data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#region ManagedObjectStorage#region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#id ManagedObjectStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User defined key-value pairs to classify the managed object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#labels ManagedObjectStorage#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.network"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>]]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#network ManagedObjectStorage#network}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetNetwork">reset_network</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_network` <a name="put_network" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.putNetwork"></a>

```python
def put_network(
  value: typing.Union[IResolvable, typing.List[ManagedObjectStorageNetwork]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.putNetwork.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetNetwork"></a>

```python
def reset_network() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagedObjectStorage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagedObjectStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedObjectStorage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedObjectStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedObjectStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList">ManagedObjectStorageEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.network">network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList">ManagedObjectStorageNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.operationalState">operational_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatusInput">configured_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.networkInput">network_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatus">configured_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.endpoint"></a>

```python
endpoint: ManagedObjectStorageEndpointList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList">ManagedObjectStorageEndpointList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.network"></a>

```python
network: ManagedObjectStorageNetworkList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList">ManagedObjectStorageNetworkList</a>

---

##### `operational_state`<sup>Required</sup> <a name="operational_state" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.operationalState"></a>

```python
operational_state: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `configured_status_input`<sup>Optional</sup> <a name="configured_status_input" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatusInput"></a>

```python
configured_status_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.networkInput"></a>

```python
network_input: typing.Union[IResolvable, typing.List[ManagedObjectStorageNetwork]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `configured_status`<sup>Required</sup> <a name="configured_status" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatus"></a>

```python
configured_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedObjectStorageConfig <a name="ManagedObjectStorageConfig" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configured_status: str,
  name: str,
  region: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: typing.Union[IResolvable, typing.List[ManagedObjectStorageNetwork]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.configuredStatus">configured_status</a></code> | <code>str</code> | Service status managed by the end user. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.name">name</a></code> | <code>str</code> | Name of the Managed Object Storage service. Must be unique within account. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.region">region</a></code> | <code>str</code> | Region in which the service will be hosted, see `upcloud_managed_object_storage_regions` data source. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#id ManagedObjectStorage#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User defined key-value pairs to classify the managed object storage. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.network">network</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>]]</code> | network block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configured_status`<sup>Required</sup> <a name="configured_status" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.configuredStatus"></a>

```python
configured_status: str
```

- *Type:* str

Service status managed by the end user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#configured_status ManagedObjectStorage#configured_status}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Managed Object Storage service. Must be unique within account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#name ManagedObjectStorage#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region in which the service will be hosted, see `upcloud_managed_object_storage_regions` data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#region ManagedObjectStorage#region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#id ManagedObjectStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User defined key-value pairs to classify the managed object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#labels ManagedObjectStorage#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.network"></a>

```python
network: typing.Union[IResolvable, typing.List[ManagedObjectStorageNetwork]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>]]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#network ManagedObjectStorage#network}

---

### ManagedObjectStorageEndpoint <a name="ManagedObjectStorageEndpoint" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorageEndpoint()
```


### ManagedObjectStorageNetwork <a name="ManagedObjectStorageNetwork" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorageNetwork(
  family: str,
  name: str,
  type: str,
  uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.family">family</a></code> | <code>str</code> | Network family. IPv6 currently not supported. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.name">name</a></code> | <code>str</code> | Network name. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.type">type</a></code> | <code>str</code> | Network type. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.uuid">uuid</a></code> | <code>str</code> | Private network uuid. For public networks the field should be omitted. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.family"></a>

```python
family: str
```

- *Type:* str

Network family. IPv6 currently not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#family ManagedObjectStorage#family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

Network name. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#name ManagedObjectStorage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.type"></a>

```python
type: str
```

- *Type:* str

Network type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#type ManagedObjectStorage#type}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

Private network uuid. For public networks the field should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/resources/managed_object_storage#uuid ManagedObjectStorage#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedObjectStorageEndpointList <a name="ManagedObjectStorageEndpointList" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorageEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedObjectStorageEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagedObjectStorageEndpointOutputReference <a name="ManagedObjectStorageEndpointOutputReference" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorageEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.iamUrl">iam_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.stsUrl">sts_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint">ManagedObjectStorageEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `iam_url`<sup>Required</sup> <a name="iam_url" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.iamUrl"></a>

```python
iam_url: str
```

- *Type:* str

---

##### `sts_url`<sup>Required</sup> <a name="sts_url" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.stsUrl"></a>

```python
sts_url: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.internalValue"></a>

```python
internal_value: ManagedObjectStorageEndpoint
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint">ManagedObjectStorageEndpoint</a>

---


### ManagedObjectStorageNetworkList <a name="ManagedObjectStorageNetworkList" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorageNetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedObjectStorageNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagedObjectStorageNetwork]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>]]

---


### ManagedObjectStorageNetworkOutputReference <a name="ManagedObjectStorageNetworkOutputReference" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage

managedObjectStorage.ManagedObjectStorageNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resetUuid">reset_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uuid` <a name="reset_uuid" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resetUuid"></a>

```python
def reset_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagedObjectStorageNetwork]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>]

---



