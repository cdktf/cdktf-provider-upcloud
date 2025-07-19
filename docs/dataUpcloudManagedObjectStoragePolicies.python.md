# `dataUpcloudManagedObjectStoragePolicies` Submodule <a name="`dataUpcloudManagedObjectStoragePolicies` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedObjectStoragePolicies <a name="DataUpcloudManagedObjectStoragePolicies" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/data-sources/managed_object_storage_policies upcloud_managed_object_storage_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_object_storage_policies

dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.serviceUuid">service_uuid</a></code> | <code>str</code> | Service UUID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/data-sources/managed_object_storage_policies#id DataUpcloudManagedObjectStoragePolicies#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_uuid`<sup>Required</sup> <a name="service_uuid" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.serviceUuid"></a>

- *Type:* str

Service UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/data-sources/managed_object_storage_policies#service_uuid DataUpcloudManagedObjectStoragePolicies#service_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/data-sources/managed_object_storage_policies#id DataUpcloudManagedObjectStoragePolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataUpcloudManagedObjectStoragePolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_object_storage_policies

dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_object_storage_policies

dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_object_storage_policies

dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_object_storage_policies

dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataUpcloudManagedObjectStoragePolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataUpcloudManagedObjectStoragePolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataUpcloudManagedObjectStoragePolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/data-sources/managed_object_storage_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedObjectStoragePolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList">DataUpcloudManagedObjectStoragePoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.serviceUuidInput">service_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.serviceUuid">service_uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.policies"></a>

```python
policies: DataUpcloudManagedObjectStoragePoliciesPoliciesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList">DataUpcloudManagedObjectStoragePoliciesPoliciesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_uuid_input`<sup>Optional</sup> <a name="service_uuid_input" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.serviceUuidInput"></a>

```python
service_uuid_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_uuid`<sup>Required</sup> <a name="service_uuid" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.serviceUuid"></a>

```python
service_uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedObjectStoragePoliciesConfig <a name="DataUpcloudManagedObjectStoragePoliciesConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_object_storage_policies

dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_uuid: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.serviceUuid">service_uuid</a></code> | <code>str</code> | Service UUID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/data-sources/managed_object_storage_policies#id DataUpcloudManagedObjectStoragePolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_uuid`<sup>Required</sup> <a name="service_uuid" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.serviceUuid"></a>

```python
service_uuid: str
```

- *Type:* str

Service UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/data-sources/managed_object_storage_policies#service_uuid DataUpcloudManagedObjectStoragePolicies#service_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/data-sources/managed_object_storage_policies#id DataUpcloudManagedObjectStoragePolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataUpcloudManagedObjectStoragePoliciesPolicies <a name="DataUpcloudManagedObjectStoragePoliciesPolicies" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_object_storage_policies

dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPolicies()
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedObjectStoragePoliciesPoliciesList <a name="DataUpcloudManagedObjectStoragePoliciesPoliciesList" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_object_storage_policies

dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference <a name="DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_object_storage_policies

dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.attachmentCount">attachment_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.defaultVersionId">default_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.document">document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.serviceUuid">service_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.systemAttribute">system_attribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPolicies">DataUpcloudManagedObjectStoragePoliciesPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attachment_count`<sup>Required</sup> <a name="attachment_count" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.attachmentCount"></a>

```python
attachment_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `default_version_id`<sup>Required</sup> <a name="default_version_id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.defaultVersionId"></a>

```python
default_version_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.document"></a>

```python
document: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_uuid`<sup>Required</sup> <a name="service_uuid" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.serviceUuid"></a>

```python
service_uuid: str
```

- *Type:* str

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.systemAttribute"></a>

```python
system_attribute: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataUpcloudManagedObjectStoragePoliciesPolicies
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStoragePolicies.DataUpcloudManagedObjectStoragePoliciesPolicies">DataUpcloudManagedObjectStoragePoliciesPolicies</a>

---



