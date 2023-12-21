# `storage` Submodule <a name="`storage` Submodule" id="@cdktf/provider-upcloud.storage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Storage <a name="Storage" id="@cdktf/provider-upcloud.storage.Storage"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage upcloud_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.Storage.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.Storage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  size: typing.Union[int, float],
  title: str,
  zone: str,
  backup_rule: StorageBackupRule = None,
  clone: StorageClone = None,
  delete_autoresize_backup: typing.Union[bool, IResolvable] = None,
  filesystem_autoresize: typing.Union[bool, IResolvable] = None,
  id: str = None,
  import: StorageImport = None,
  tier: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | The size of the storage in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.title">title</a></code> | <code>str</code> | A short, informative description. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone in which the storage will be created, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.backupRule">backup_rule</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a></code> | backup_rule block. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.clone">clone</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.deleteAutoresizeBackup">delete_autoresize_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.filesystemAutoresize">filesystem_autoresize</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, provider will attempt to resize partition and filesystem when the size of the storage changes. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#id Storage#id}. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.import">import</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.tier">tier</a></code> | <code>str</code> | The storage tier to use. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

The size of the storage in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#size Storage#size}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.title"></a>

- *Type:* str

A short, informative description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#title Storage#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.zone"></a>

- *Type:* str

The zone in which the storage will be created, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#zone Storage#zone}

---

##### `backup_rule`<sup>Optional</sup> <a name="backup_rule" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.backupRule"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

backup_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#backup_rule Storage#backup_rule}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.clone"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#clone Storage#clone}

---

##### `delete_autoresize_backup`<sup>Optional</sup> <a name="delete_autoresize_backup" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.deleteAutoresizeBackup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#delete_autoresize_backup Storage#delete_autoresize_backup}

---

##### `filesystem_autoresize`<sup>Optional</sup> <a name="filesystem_autoresize" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.filesystemAutoresize"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, provider will attempt to resize partition and filesystem when the size of the storage changes.

Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used
to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless delete_autoresize_backup option is set to true).
Taking and keeping backups incure costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#filesystem_autoresize Storage#filesystem_autoresize}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#id Storage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import`<sup>Optional</sup> <a name="import" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.import"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#import Storage#import}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.tier"></a>

- *Type:* str

The storage tier to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#tier Storage#tier}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.putBackupRule">put_backup_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.putClone">put_clone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.putImport">put_import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetBackupRule">reset_backup_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetClone">reset_clone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetDeleteAutoresizeBackup">reset_delete_autoresize_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetFilesystemAutoresize">reset_filesystem_autoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetImport">reset_import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetTier">reset_tier</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.storage.Storage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.storage.Storage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.storage.Storage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.storage.Storage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.storage.Storage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.storage.Storage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.storage.Storage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.storage.Storage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.storage.Storage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.storage.Storage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.storage.Storage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.storage.Storage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.Storage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.storage.Storage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.Storage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.storage.Storage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.Storage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.storage.Storage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.Storage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.storage.Storage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.storage.Storage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.Storage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.storage.Storage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.storage.Storage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.Storage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.storage.Storage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.Storage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.storage.Storage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.storage.Storage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.storage.Storage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.storage.Storage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.Storage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_rule` <a name="put_backup_rule" id="@cdktf/provider-upcloud.storage.Storage.putBackupRule"></a>

```python
def put_backup_rule(
  interval: str,
  retention: typing.Union[int, float],
  time: str
) -> None
```

###### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-upcloud.storage.Storage.putBackupRule.parameter.interval"></a>

- *Type:* str

The weekday when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#interval Storage#interval}

---

###### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-upcloud.storage.Storage.putBackupRule.parameter.retention"></a>

- *Type:* typing.Union[int, float]

The number of days before a backup is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#retention Storage#retention}

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.storage.Storage.putBackupRule.parameter.time"></a>

- *Type:* str

The time of day when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#time Storage#time}

---

##### `put_clone` <a name="put_clone" id="@cdktf/provider-upcloud.storage.Storage.putClone"></a>

```python
def put_clone(
  id: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.Storage.putClone.parameter.id"></a>

- *Type:* str

The unique identifier of the storage/template to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#id Storage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `put_import` <a name="put_import" id="@cdktf/provider-upcloud.storage.Storage.putImport"></a>

```python
def put_import(
  source: str,
  source_location: str,
  source_hash: str = None
) -> None
```

###### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-upcloud.storage.Storage.putImport.parameter.source"></a>

- *Type:* str

The mode of the import task. One of `http_import` or `direct_upload`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#source Storage#source}

---

###### `source_location`<sup>Required</sup> <a name="source_location" id="@cdktf/provider-upcloud.storage.Storage.putImport.parameter.sourceLocation"></a>

- *Type:* str

The location of the file to import. For `http_import` an accessible URL for `direct_upload` a local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#source_location Storage#source_location}

---

###### `source_hash`<sup>Optional</sup> <a name="source_hash" id="@cdktf/provider-upcloud.storage.Storage.putImport.parameter.sourceHash"></a>

- *Type:* str

For `direct_upload`; an optional hash of the file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#source_hash Storage#source_hash}

---

##### `reset_backup_rule` <a name="reset_backup_rule" id="@cdktf/provider-upcloud.storage.Storage.resetBackupRule"></a>

```python
def reset_backup_rule() -> None
```

##### `reset_clone` <a name="reset_clone" id="@cdktf/provider-upcloud.storage.Storage.resetClone"></a>

```python
def reset_clone() -> None
```

##### `reset_delete_autoresize_backup` <a name="reset_delete_autoresize_backup" id="@cdktf/provider-upcloud.storage.Storage.resetDeleteAutoresizeBackup"></a>

```python
def reset_delete_autoresize_backup() -> None
```

##### `reset_filesystem_autoresize` <a name="reset_filesystem_autoresize" id="@cdktf/provider-upcloud.storage.Storage.resetFilesystemAutoresize"></a>

```python
def reset_filesystem_autoresize() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.storage.Storage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import` <a name="reset_import" id="@cdktf/provider-upcloud.storage.Storage.resetImport"></a>

```python
def reset_import() -> None
```

##### `reset_tier` <a name="reset_tier" id="@cdktf/provider-upcloud.storage.Storage.resetTier"></a>

```python
def reset_tier() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Storage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.storage.Storage.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.Storage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.storage.Storage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.storage.Storage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.Storage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.storage.Storage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.storage.Storage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.Storage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.storage.Storage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.Storage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Storage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Storage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Storage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Storage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.backupRule">backup_rule</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference">StorageBackupRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference">StorageCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.import">import</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference">StorageImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.backupRuleInput">backup_rule_input</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.cloneInput">clone_input</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackupInput">delete_autoresize_backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresizeInput">filesystem_autoresize_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.importInput">import_input</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackup">delete_autoresize_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresize">filesystem_autoresize</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.storage.Storage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.storage.Storage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.storage.Storage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.storage.Storage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.storage.Storage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.storage.Storage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.storage.Storage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.storage.Storage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.storage.Storage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.storage.Storage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.storage.Storage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.storage.Storage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.storage.Storage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.storage.Storage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_rule`<sup>Required</sup> <a name="backup_rule" id="@cdktf/provider-upcloud.storage.Storage.property.backupRule"></a>

```python
backup_rule: StorageBackupRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference">StorageBackupRuleOutputReference</a>

---

##### `clone`<sup>Required</sup> <a name="clone" id="@cdktf/provider-upcloud.storage.Storage.property.clone"></a>

```python
clone: StorageCloneOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference">StorageCloneOutputReference</a>

---

##### `import`<sup>Required</sup> <a name="import" id="@cdktf/provider-upcloud.storage.Storage.property.import"></a>

```python
import: StorageImportOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference">StorageImportOutputReference</a>

---

##### `backup_rule_input`<sup>Optional</sup> <a name="backup_rule_input" id="@cdktf/provider-upcloud.storage.Storage.property.backupRuleInput"></a>

```python
backup_rule_input: StorageBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

---

##### `clone_input`<sup>Optional</sup> <a name="clone_input" id="@cdktf/provider-upcloud.storage.Storage.property.cloneInput"></a>

```python
clone_input: StorageClone
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

---

##### `delete_autoresize_backup_input`<sup>Optional</sup> <a name="delete_autoresize_backup_input" id="@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackupInput"></a>

```python
delete_autoresize_backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filesystem_autoresize_input`<sup>Optional</sup> <a name="filesystem_autoresize_input" id="@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresizeInput"></a>

```python
filesystem_autoresize_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.storage.Storage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_input`<sup>Optional</sup> <a name="import_input" id="@cdktf/provider-upcloud.storage.Storage.property.importInput"></a>

```python
import_input: StorageImport
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-upcloud.storage.Storage.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-upcloud.storage.Storage.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-upcloud.storage.Storage.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-upcloud.storage.Storage.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `delete_autoresize_backup`<sup>Required</sup> <a name="delete_autoresize_backup" id="@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackup"></a>

```python
delete_autoresize_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filesystem_autoresize`<sup>Required</sup> <a name="filesystem_autoresize" id="@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresize"></a>

```python
filesystem_autoresize: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.Storage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-upcloud.storage.Storage.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-upcloud.storage.Storage.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.storage.Storage.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.storage.Storage.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.storage.Storage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBackupRule <a name="StorageBackupRule" id="@cdktf/provider-upcloud.storage.StorageBackupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageBackupRule.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.StorageBackupRule(
  interval: str,
  retention: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule.property.interval">interval</a></code> | <code>str</code> | The weekday when the backup is created. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule.property.retention">retention</a></code> | <code>typing.Union[int, float]</code> | The number of days before a backup is automatically deleted. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule.property.time">time</a></code> | <code>str</code> | The time of day when the backup is created. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-upcloud.storage.StorageBackupRule.property.interval"></a>

```python
interval: str
```

- *Type:* str

The weekday when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#interval Storage#interval}

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-upcloud.storage.StorageBackupRule.property.retention"></a>

```python
retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days before a backup is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#retention Storage#retention}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.storage.StorageBackupRule.property.time"></a>

```python
time: str
```

- *Type:* str

The time of day when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#time Storage#time}

---

### StorageClone <a name="StorageClone" id="@cdktf/provider-upcloud.storage.StorageClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageClone.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.StorageClone(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageClone.property.id">id</a></code> | <code>str</code> | The unique identifier of the storage/template to clone. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.StorageClone.property.id"></a>

```python
id: str
```

- *Type:* str

The unique identifier of the storage/template to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#id Storage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### StorageConfig <a name="StorageConfig" id="@cdktf/provider-upcloud.storage.StorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.StorageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  size: typing.Union[int, float],
  title: str,
  zone: str,
  backup_rule: StorageBackupRule = None,
  clone: StorageClone = None,
  delete_autoresize_backup: typing.Union[bool, IResolvable] = None,
  filesystem_autoresize: typing.Union[bool, IResolvable] = None,
  id: str = None,
  import: StorageImport = None,
  tier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | The size of the storage in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.title">title</a></code> | <code>str</code> | A short, informative description. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.zone">zone</a></code> | <code>str</code> | The zone in which the storage will be created, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.backupRule">backup_rule</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a></code> | backup_rule block. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.deleteAutoresizeBackup">delete_autoresize_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.filesystemAutoresize">filesystem_autoresize</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, provider will attempt to resize partition and filesystem when the size of the storage changes. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#id Storage#id}. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.import">import</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.tier">tier</a></code> | <code>str</code> | The storage tier to use. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.storage.StorageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.storage.StorageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.storage.StorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.storage.StorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.storage.StorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.storage.StorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.storage.StorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-upcloud.storage.StorageConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the storage in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#size Storage#size}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.storage.StorageConfig.property.title"></a>

```python
title: str
```

- *Type:* str

A short, informative description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#title Storage#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.storage.StorageConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone in which the storage will be created, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#zone Storage#zone}

---

##### `backup_rule`<sup>Optional</sup> <a name="backup_rule" id="@cdktf/provider-upcloud.storage.StorageConfig.property.backupRule"></a>

```python
backup_rule: StorageBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

backup_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#backup_rule Storage#backup_rule}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-upcloud.storage.StorageConfig.property.clone"></a>

```python
clone: StorageClone
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#clone Storage#clone}

---

##### `delete_autoresize_backup`<sup>Optional</sup> <a name="delete_autoresize_backup" id="@cdktf/provider-upcloud.storage.StorageConfig.property.deleteAutoresizeBackup"></a>

```python
delete_autoresize_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#delete_autoresize_backup Storage#delete_autoresize_backup}

---

##### `filesystem_autoresize`<sup>Optional</sup> <a name="filesystem_autoresize" id="@cdktf/provider-upcloud.storage.StorageConfig.property.filesystemAutoresize"></a>

```python
filesystem_autoresize: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, provider will attempt to resize partition and filesystem when the size of the storage changes.

Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used
to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless delete_autoresize_backup option is set to true).
Taking and keeping backups incure costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#filesystem_autoresize Storage#filesystem_autoresize}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.storage.StorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#id Storage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import`<sup>Optional</sup> <a name="import" id="@cdktf/provider-upcloud.storage.StorageConfig.property.import"></a>

```python
import: StorageImport
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#import Storage#import}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-upcloud.storage.StorageConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

The storage tier to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#tier Storage#tier}

---

### StorageImport <a name="StorageImport" id="@cdktf/provider-upcloud.storage.StorageImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageImport.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.StorageImport(
  source: str,
  source_location: str,
  source_hash: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImport.property.source">source</a></code> | <code>str</code> | The mode of the import task. One of `http_import` or `direct_upload`. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImport.property.sourceLocation">source_location</a></code> | <code>str</code> | The location of the file to import. For `http_import` an accessible URL for `direct_upload` a local file. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImport.property.sourceHash">source_hash</a></code> | <code>str</code> | For `direct_upload`; an optional hash of the file to upload. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-upcloud.storage.StorageImport.property.source"></a>

```python
source: str
```

- *Type:* str

The mode of the import task. One of `http_import` or `direct_upload`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#source Storage#source}

---

##### `source_location`<sup>Required</sup> <a name="source_location" id="@cdktf/provider-upcloud.storage.StorageImport.property.sourceLocation"></a>

```python
source_location: str
```

- *Type:* str

The location of the file to import. For `http_import` an accessible URL for `direct_upload` a local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#source_location Storage#source_location}

---

##### `source_hash`<sup>Optional</sup> <a name="source_hash" id="@cdktf/provider-upcloud.storage.StorageImport.property.sourceHash"></a>

```python
source_hash: str
```

- *Type:* str

For `direct_upload`; an optional hash of the file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#source_hash Storage#source_hash}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBackupRuleOutputReference <a name="StorageBackupRuleOutputReference" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.StorageBackupRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retentionInput">retention_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retention">retention</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `retention_input`<sup>Optional</sup> <a name="retention_input" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retentionInput"></a>

```python
retention_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retention"></a>

```python
retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.internalValue"></a>

```python
internal_value: StorageBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

---


### StorageCloneOutputReference <a name="StorageCloneOutputReference" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.StorageCloneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.internalValue"></a>

```python
internal_value: StorageClone
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

---


### StorageImportOutputReference <a name="StorageImportOutputReference" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import storage

storage.StorageImportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.resetSourceHash">reset_source_hash</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_hash` <a name="reset_source_hash" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.resetSourceHash"></a>

```python
def reset_source_hash() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sha256Sum">sha256_sum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.writtenBytes">written_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHashInput">source_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocationInput">source_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHash">source_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocation">source_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256_sum`<sup>Required</sup> <a name="sha256_sum" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sha256Sum"></a>

```python
sha256_sum: str
```

- *Type:* str

---

##### `written_bytes`<sup>Required</sup> <a name="written_bytes" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.writtenBytes"></a>

```python
written_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_hash_input`<sup>Optional</sup> <a name="source_hash_input" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHashInput"></a>

```python
source_hash_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source_location_input`<sup>Optional</sup> <a name="source_location_input" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocationInput"></a>

```python
source_location_input: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_hash`<sup>Required</sup> <a name="source_hash" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHash"></a>

```python
source_hash: str
```

- *Type:* str

---

##### `source_location`<sup>Required</sup> <a name="source_location" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocation"></a>

```python
source_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.internalValue"></a>

```python
internal_value: StorageImport
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

---



