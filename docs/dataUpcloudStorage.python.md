# `dataUpcloudStorage` Submodule <a name="`dataUpcloudStorage` Submodule" id="@cdktf/provider-upcloud.dataUpcloudStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudStorage <a name="DataUpcloudStorage" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage"></a>

Represents a {@link https://www.terraform.io/docs/providers/upcloud/d/storage upcloud_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_storage

dataUpcloudStorage.DataUpcloudStorage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  access_type: str = None,
  id: str = None,
  most_recent: typing.Union[bool, IResolvable] = None,
  name: str = None,
  name_regex: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.type">type</a></code> | <code>str</code> | Storage type (normal, backup, cdrom, template). Use 'favorite' as type to filter storages on the list of favorites. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.accessType">access_type</a></code> | <code>str</code> | Storage access type (public, private). |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#id DataUpcloudStorage#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If more than one result is returned, use the most recent storage. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.name">name</a></code> | <code>str</code> | Exact name of the storage (same as title). |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.nameRegex">name_regex</a></code> | <code>str</code> | Use regular expression to match storage name. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone in which the storage resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.type"></a>

- *Type:* str

Storage type (normal, backup, cdrom, template). Use 'favorite' as type to filter storages on the list of favorites.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#type DataUpcloudStorage#type}

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.accessType"></a>

- *Type:* str

Storage access type (public, private).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#access_type DataUpcloudStorage#access_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#id DataUpcloudStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.mostRecent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If more than one result is returned, use the most recent storage.

This is only useful with private storages. Public storages might give unpredictable results.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#most_recent DataUpcloudStorage#most_recent}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.name"></a>

- *Type:* str

Exact name of the storage (same as title).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#name DataUpcloudStorage#name}

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.nameRegex"></a>

- *Type:* str

Use regular expression to match storage name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#name_regex DataUpcloudStorage#name_regex}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.zone"></a>

- *Type:* str

The zone in which the storage resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#zone DataUpcloudStorage#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetAccessType">reset_access_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetMostRecent">reset_most_recent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetNameRegex">reset_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_access_type` <a name="reset_access_type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetAccessType"></a>

```python
def reset_access_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_most_recent` <a name="reset_most_recent" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetMostRecent"></a>

```python
def reset_most_recent() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_regex` <a name="reset_name_regex" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetNameRegex"></a>

```python
def reset_name_regex() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_storage

dataUpcloudStorage.DataUpcloudStorage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_storage

dataUpcloudStorage.DataUpcloudStorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_storage

dataUpcloudStorage.DataUpcloudStorage.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecentInput">most_recent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegexInput">name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegex">name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `most_recent_input`<sup>Optional</sup> <a name="most_recent_input" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecentInput"></a>

```python
most_recent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_regex_input`<sup>Optional</sup> <a name="name_regex_input" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegexInput"></a>

```python
name_regex_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `most_recent`<sup>Required</sup> <a name="most_recent" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecent"></a>

```python
most_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_regex`<sup>Required</sup> <a name="name_regex" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudStorageConfig <a name="DataUpcloudStorageConfig" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_storage

dataUpcloudStorage.DataUpcloudStorageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  access_type: str = None,
  id: str = None,
  most_recent: typing.Union[bool, IResolvable] = None,
  name: str = None,
  name_regex: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.type">type</a></code> | <code>str</code> | Storage type (normal, backup, cdrom, template). Use 'favorite' as type to filter storages on the list of favorites. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.accessType">access_type</a></code> | <code>str</code> | Storage access type (public, private). |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#id DataUpcloudStorage#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If more than one result is returned, use the most recent storage. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.name">name</a></code> | <code>str</code> | Exact name of the storage (same as title). |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.nameRegex">name_regex</a></code> | <code>str</code> | Use regular expression to match storage name. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.zone">zone</a></code> | <code>str</code> | The zone in which the storage resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Storage type (normal, backup, cdrom, template). Use 'favorite' as type to filter storages on the list of favorites.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#type DataUpcloudStorage#type}

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Storage access type (public, private).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#access_type DataUpcloudStorage#access_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#id DataUpcloudStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.mostRecent"></a>

```python
most_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If more than one result is returned, use the most recent storage.

This is only useful with private storages. Public storages might give unpredictable results.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#most_recent DataUpcloudStorage#most_recent}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Exact name of the storage (same as title).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#name DataUpcloudStorage#name}

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

Use regular expression to match storage name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#name_regex DataUpcloudStorage#name_regex}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone in which the storage resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#zone DataUpcloudStorage#zone}

---


