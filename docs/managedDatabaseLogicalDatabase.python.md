# `managedDatabaseLogicalDatabase` Submodule <a name="`managedDatabaseLogicalDatabase` Submodule" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseLogicalDatabase <a name="ManagedDatabaseLogicalDatabase" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase"></a>

Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database upcloud_managed_database_logical_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_logical_database

managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  service: str,
  character_set: str = None,
  collation: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the logical database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.service">service</a></code> | <code>str</code> | Service's UUID for which this user belongs to. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.characterSet">character_set</a></code> | <code>str</code> | Default character set for the database (LC_CTYPE). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.collation">collation</a></code> | <code>str</code> | Default collation for the database (LC_COLLATE). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#id ManagedDatabaseLogicalDatabase#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.name"></a>

- *Type:* str

Name of the logical database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#name ManagedDatabaseLogicalDatabase#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.service"></a>

- *Type:* str

Service's UUID for which this user belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#service ManagedDatabaseLogicalDatabase#service}

---

##### `character_set`<sup>Optional</sup> <a name="character_set" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.characterSet"></a>

- *Type:* str

Default character set for the database (LC_CTYPE).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#character_set ManagedDatabaseLogicalDatabase#character_set}

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.collation"></a>

- *Type:* str

Default collation for the database (LC_COLLATE).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#collation ManagedDatabaseLogicalDatabase#collation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#id ManagedDatabaseLogicalDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCharacterSet">reset_character_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCollation">reset_collation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_character_set` <a name="reset_character_set" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCharacterSet"></a>

```python
def reset_character_set() -> None
```

##### `reset_collation` <a name="reset_collation" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCollation"></a>

```python
def reset_collation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_logical_database

managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_logical_database

managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_logical_database

managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSetInput">character_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collationInput">collation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collation">collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `character_set_input`<sup>Optional</sup> <a name="character_set_input" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSetInput"></a>

```python
character_set_input: str
```

- *Type:* str

---

##### `collation_input`<sup>Optional</sup> <a name="collation_input" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collationInput"></a>

```python
collation_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collation"></a>

```python
collation: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseLogicalDatabaseConfig <a name="ManagedDatabaseLogicalDatabaseConfig" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_logical_database

managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  service: str,
  character_set: str = None,
  collation: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.name">name</a></code> | <code>str</code> | Name of the logical database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.service">service</a></code> | <code>str</code> | Service's UUID for which this user belongs to. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.characterSet">character_set</a></code> | <code>str</code> | Default character set for the database (LC_CTYPE). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.collation">collation</a></code> | <code>str</code> | Default collation for the database (LC_COLLATE). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#id ManagedDatabaseLogicalDatabase#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the logical database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#name ManagedDatabaseLogicalDatabase#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Service's UUID for which this user belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#service ManagedDatabaseLogicalDatabase#service}

---

##### `character_set`<sup>Optional</sup> <a name="character_set" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

Default character set for the database (LC_CTYPE).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#character_set ManagedDatabaseLogicalDatabase#character_set}

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.collation"></a>

```python
collation: str
```

- *Type:* str

Default collation for the database (LC_COLLATE).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#collation ManagedDatabaseLogicalDatabase#collation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#id ManagedDatabaseLogicalDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


