# `managedObjectStorageUserAccessKey` Submodule <a name="`managedObjectStorageUserAccessKey` Submodule" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedObjectStorageUserAccessKey <a name="ManagedObjectStorageUserAccessKey" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key upcloud_managed_object_storage_user_access_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage_user_access_key

managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_uuid: str,
  status: str,
  username: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.serviceUuid">service_uuid</a></code> | <code>str</code> | Managed Object Storage service UUID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of the key. Valid values: `Active`\|`Inactive`. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.username">username</a></code> | <code>str</code> | Username. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key#id ManagedObjectStorageUserAccessKey#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_uuid`<sup>Required</sup> <a name="service_uuid" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.serviceUuid"></a>

- *Type:* str

Managed Object Storage service UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key#service_uuid ManagedObjectStorageUserAccessKey#service_uuid}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.status"></a>

- *Type:* str

Status of the key. Valid values: `Active`|`Inactive`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key#status ManagedObjectStorageUserAccessKey#status}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.username"></a>

- *Type:* str

Username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key#username ManagedObjectStorageUserAccessKey#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key#id ManagedObjectStorageUserAccessKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagedObjectStorageUserAccessKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage_user_access_key

managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage_user_access_key

managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage_user_access_key

managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage_user_access_key

managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagedObjectStorageUserAccessKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedObjectStorageUserAccessKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedObjectStorageUserAccessKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedObjectStorageUserAccessKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.lastUsedAt">last_used_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.serviceUuidInput">service_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.serviceUuid">service_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `last_used_at`<sup>Required</sup> <a name="last_used_at" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.lastUsedAt"></a>

```python
last_used_at: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_uuid_input`<sup>Optional</sup> <a name="service_uuid_input" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.serviceUuidInput"></a>

```python
service_uuid_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_uuid`<sup>Required</sup> <a name="service_uuid" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.serviceUuid"></a>

```python
service_uuid: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedObjectStorageUserAccessKeyConfig <a name="ManagedObjectStorageUserAccessKeyConfig" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_object_storage_user_access_key

managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_uuid: str,
  status: str,
  username: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.serviceUuid">service_uuid</a></code> | <code>str</code> | Managed Object Storage service UUID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.status">status</a></code> | <code>str</code> | Status of the key. Valid values: `Active`\|`Inactive`. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.username">username</a></code> | <code>str</code> | Username. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key#id ManagedObjectStorageUserAccessKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_uuid`<sup>Required</sup> <a name="service_uuid" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.serviceUuid"></a>

```python
service_uuid: str
```

- *Type:* str

Managed Object Storage service UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key#service_uuid ManagedObjectStorageUserAccessKey#service_uuid}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of the key. Valid values: `Active`|`Inactive`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key#status ManagedObjectStorageUserAccessKey#status}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key#username ManagedObjectStorageUserAccessKey#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/resources/managed_object_storage_user_access_key#id ManagedObjectStorageUserAccessKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



