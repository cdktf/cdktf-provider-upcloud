# `dataUpcloudManagedDatabaseOpensearchIndices` Submodule <a name="`dataUpcloudManagedDatabaseOpensearchIndices` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseOpensearchIndices <a name="DataUpcloudManagedDatabaseOpensearchIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.26.0/docs/data-sources/managed_database_opensearch_indices upcloud_managed_database_opensearch_indices}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_opensearch_indices

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  id: str = None,
  indices: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseOpensearchIndicesIndices]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.service">service</a></code> | <code>str</code> | Service's UUID for which these indices belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.26.0/docs/data-sources/managed_database_opensearch_indices#id DataUpcloudManagedDatabaseOpensearchIndices#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.indices">indices</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>]]</code> | indices block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.service"></a>

- *Type:* str

Service's UUID for which these indices belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.26.0/docs/data-sources/managed_database_opensearch_indices#service DataUpcloudManagedDatabaseOpensearchIndices#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.26.0/docs/data-sources/managed_database_opensearch_indices#id DataUpcloudManagedDatabaseOpensearchIndices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indices`<sup>Optional</sup> <a name="indices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.indices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>]]

indices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.26.0/docs/data-sources/managed_database_opensearch_indices#indices DataUpcloudManagedDatabaseOpensearchIndices#indices}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices">put_indices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetIndices">reset_indices</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_indices` <a name="put_indices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices"></a>

```python
def put_indices(
  value: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseOpensearchIndicesIndices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_indices` <a name="reset_indices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetIndices"></a>

```python
def reset_indices() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseOpensearchIndices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_opensearch_indices

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_opensearch_indices

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_opensearch_indices

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_opensearch_indices

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseOpensearchIndices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataUpcloudManagedDatabaseOpensearchIndices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataUpcloudManagedDatabaseOpensearchIndices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.26.0/docs/data-sources/managed_database_opensearch_indices#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseOpensearchIndices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indices">indices</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList">DataUpcloudManagedDatabaseOpensearchIndicesIndicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indicesInput">indices_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `indices`<sup>Required</sup> <a name="indices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indices"></a>

```python
indices: DataUpcloudManagedDatabaseOpensearchIndicesIndicesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList">DataUpcloudManagedDatabaseOpensearchIndicesIndicesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `indices_input`<sup>Optional</sup> <a name="indices_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indicesInput"></a>

```python
indices_input: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseOpensearchIndicesIndices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>]]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseOpensearchIndicesConfig <a name="DataUpcloudManagedDatabaseOpensearchIndicesConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_opensearch_indices

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  id: str = None,
  indices: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseOpensearchIndicesIndices]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.service">service</a></code> | <code>str</code> | Service's UUID for which these indices belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.26.0/docs/data-sources/managed_database_opensearch_indices#id DataUpcloudManagedDatabaseOpensearchIndices#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.indices">indices</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>]]</code> | indices block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Service's UUID for which these indices belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.26.0/docs/data-sources/managed_database_opensearch_indices#service DataUpcloudManagedDatabaseOpensearchIndices#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.26.0/docs/data-sources/managed_database_opensearch_indices#id DataUpcloudManagedDatabaseOpensearchIndices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indices`<sup>Optional</sup> <a name="indices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.indices"></a>

```python
indices: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseOpensearchIndicesIndices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>]]

indices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.26.0/docs/data-sources/managed_database_opensearch_indices#indices DataUpcloudManagedDatabaseOpensearchIndices#indices}

---

### DataUpcloudManagedDatabaseOpensearchIndicesIndices <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_opensearch_indices

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices()
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseOpensearchIndicesIndicesList <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndicesList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_opensearch_indices

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseOpensearchIndicesIndices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>]]

---


### DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_opensearch_indices

dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.docs">docs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfReplicas">number_of_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfShards">number_of_shards</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.readOnlyAllowDelete">read_only_allow_delete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `docs`<sup>Required</sup> <a name="docs" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.docs"></a>

```python
docs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `number_of_replicas`<sup>Required</sup> <a name="number_of_replicas" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfReplicas"></a>

```python
number_of_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_shards`<sup>Required</sup> <a name="number_of_shards" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfShards"></a>

```python
number_of_shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_only_allow_delete`<sup>Required</sup> <a name="read_only_allow_delete" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.readOnlyAllowDelete"></a>

```python
read_only_allow_delete: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataUpcloudManagedDatabaseOpensearchIndicesIndices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices">DataUpcloudManagedDatabaseOpensearchIndicesIndices</a>]

---



