# `dataUpcloudIpAddresses` Submodule <a name="`dataUpcloudIpAddresses` Submodule" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudIpAddresses <a name="DataUpcloudIpAddresses" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/data-sources/ip_addresses upcloud_ip_addresses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_ip_addresses

dataUpcloudIpAddresses.DataUpcloudIpAddresses(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/data-sources/ip_addresses#id DataUpcloudIpAddresses#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/data-sources/ip_addresses#id DataUpcloudIpAddresses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataUpcloudIpAddresses resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_ip_addresses

dataUpcloudIpAddresses.DataUpcloudIpAddresses.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_ip_addresses

dataUpcloudIpAddresses.DataUpcloudIpAddresses.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_ip_addresses

dataUpcloudIpAddresses.DataUpcloudIpAddresses.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_ip_addresses

dataUpcloudIpAddresses.DataUpcloudIpAddresses.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataUpcloudIpAddresses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataUpcloudIpAddresses to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataUpcloudIpAddresses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/data-sources/ip_addresses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudIpAddresses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList">DataUpcloudIpAddressesAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.addresses"></a>

```python
addresses: DataUpcloudIpAddressesAddressesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList">DataUpcloudIpAddressesAddressesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddresses.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudIpAddressesAddresses <a name="DataUpcloudIpAddressesAddresses" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddresses.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_ip_addresses

dataUpcloudIpAddresses.DataUpcloudIpAddressesAddresses()
```


### DataUpcloudIpAddressesConfig <a name="DataUpcloudIpAddressesConfig" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_ip_addresses

dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/data-sources/ip_addresses#id DataUpcloudIpAddresses#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.5.0/docs/data-sources/ip_addresses#id DataUpcloudIpAddresses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudIpAddressesAddressesList <a name="DataUpcloudIpAddressesAddressesList" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_ip_addresses

dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataUpcloudIpAddressesAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataUpcloudIpAddressesAddressesOutputReference <a name="DataUpcloudIpAddressesAddressesOutputReference" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_ip_addresses

dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.floating">floating</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.mac">mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.partOfPlan">part_of_plan</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.ptrRecord">ptr_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddresses">DataUpcloudIpAddressesAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `floating`<sup>Required</sup> <a name="floating" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.floating"></a>

```python
floating: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.mac"></a>

```python
mac: str
```

- *Type:* str

---

##### `part_of_plan`<sup>Required</sup> <a name="part_of_plan" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.partOfPlan"></a>

```python
part_of_plan: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ptr_record`<sup>Required</sup> <a name="ptr_record" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.ptrRecord"></a>

```python
ptr_record: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddressesOutputReference.property.internalValue"></a>

```python
internal_value: DataUpcloudIpAddressesAddresses
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudIpAddresses.DataUpcloudIpAddressesAddresses">DataUpcloudIpAddressesAddresses</a>

---



