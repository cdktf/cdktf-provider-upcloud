# `dataUpcloudNetworks` Submodule <a name="`dataUpcloudNetworks` Submodule" id="@cdktf/provider-upcloud.dataUpcloudNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudNetworks <a name="DataUpcloudNetworks" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/networks upcloud_networks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworks(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter_name: str = None,
  id: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.filterName">filter_name</a></code> | <code>str</code> | If specified, results will be filtered to match name using a regular expression. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/networks#id DataUpcloudNetworks#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.zone">zone</a></code> | <code>str</code> | If specified, this data source will return only networks from this zone. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter_name`<sup>Optional</sup> <a name="filter_name" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.filterName"></a>

- *Type:* str

If specified, results will be filtered to match name using a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/networks#filter_name DataUpcloudNetworks#filter_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/networks#id DataUpcloudNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.Initializer.parameter.zone"></a>

- *Type:* str

If specified, this data source will return only networks from this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/networks#zone DataUpcloudNetworks#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.resetFilterName">reset_filter_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter_name` <a name="reset_filter_name" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.resetFilterName"></a>

```python
def reset_filter_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataUpcloudNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataUpcloudNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataUpcloudNetworks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataUpcloudNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList">DataUpcloudNetworksNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.filterNameInput">filter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.filterName">filter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.networks"></a>

```python
networks: DataUpcloudNetworksNetworksList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList">DataUpcloudNetworksNetworksList</a>

---

##### `filter_name_input`<sup>Optional</sup> <a name="filter_name_input" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.filterNameInput"></a>

```python
filter_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `filter_name`<sup>Required</sup> <a name="filter_name" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.filterName"></a>

```python
filter_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudNetworksConfig <a name="DataUpcloudNetworksConfig" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworksConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter_name: str = None,
  id: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.filterName">filter_name</a></code> | <code>str</code> | If specified, results will be filtered to match name using a regular expression. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/networks#id DataUpcloudNetworks#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.zone">zone</a></code> | <code>str</code> | If specified, this data source will return only networks from this zone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter_name`<sup>Optional</sup> <a name="filter_name" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.filterName"></a>

```python
filter_name: str
```

- *Type:* str

If specified, results will be filtered to match name using a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/networks#filter_name DataUpcloudNetworks#filter_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/networks#id DataUpcloudNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

If specified, this data source will return only networks from this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/networks#zone DataUpcloudNetworks#zone}

---

### DataUpcloudNetworksNetworks <a name="DataUpcloudNetworksNetworks" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworksNetworks()
```


### DataUpcloudNetworksNetworksIpNetwork <a name="DataUpcloudNetworksNetworksIpNetwork" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetwork()
```


### DataUpcloudNetworksNetworksServers <a name="DataUpcloudNetworksNetworksServers" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServers.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworksNetworksServers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudNetworksNetworksIpNetworkList <a name="DataUpcloudNetworksNetworksIpNetworkList" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataUpcloudNetworksNetworksIpNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataUpcloudNetworksNetworksIpNetworkOutputReference <a name="DataUpcloudNetworksNetworksIpNetworkOutputReference" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.dhcp">dhcp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.dhcpDefaultRoute">dhcp_default_route</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.dhcpDns">dhcp_dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.dhcpRoutes">dhcp_routes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetwork">DataUpcloudNetworksNetworksIpNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.dhcp"></a>

```python
dhcp: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `dhcp_default_route`<sup>Required</sup> <a name="dhcp_default_route" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.dhcpDefaultRoute"></a>

```python
dhcp_default_route: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `dhcp_dns`<sup>Required</sup> <a name="dhcp_dns" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.dhcpDns"></a>

```python
dhcp_dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dhcp_routes`<sup>Required</sup> <a name="dhcp_routes" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.dhcpRoutes"></a>

```python
dhcp_routes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkOutputReference.property.internalValue"></a>

```python
internal_value: DataUpcloudNetworksNetworksIpNetwork
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetwork">DataUpcloudNetworksNetworksIpNetwork</a>

---


### DataUpcloudNetworksNetworksList <a name="DataUpcloudNetworksNetworksList" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworksNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataUpcloudNetworksNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataUpcloudNetworksNetworksOutputReference <a name="DataUpcloudNetworksNetworksOutputReference" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.ipNetwork">ip_network</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList">DataUpcloudNetworksNetworksIpNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.servers">servers</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList">DataUpcloudNetworksNetworksServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworks">DataUpcloudNetworksNetworks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_network`<sup>Required</sup> <a name="ip_network" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.ipNetwork"></a>

```python
ip_network: DataUpcloudNetworksNetworksIpNetworkList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksIpNetworkList">DataUpcloudNetworksNetworksIpNetworkList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.servers"></a>

```python
servers: DataUpcloudNetworksNetworksServersList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList">DataUpcloudNetworksNetworksServersList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksOutputReference.property.internalValue"></a>

```python
internal_value: DataUpcloudNetworksNetworks
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworks">DataUpcloudNetworksNetworks</a>

---


### DataUpcloudNetworksNetworksServersList <a name="DataUpcloudNetworksNetworksServersList" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataUpcloudNetworksNetworksServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataUpcloudNetworksNetworksServersOutputReference <a name="DataUpcloudNetworksNetworksServersOutputReference" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_networks

dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServers">DataUpcloudNetworksNetworksServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServersOutputReference.property.internalValue"></a>

```python
internal_value: DataUpcloudNetworksNetworksServers
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudNetworks.DataUpcloudNetworksNetworksServers">DataUpcloudNetworksNetworksServers</a>

---



