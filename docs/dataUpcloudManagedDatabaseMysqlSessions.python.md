# `dataUpcloudManagedDatabaseMysqlSessions` Submodule <a name="`dataUpcloudManagedDatabaseMysqlSessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseMysqlSessions <a name="DataUpcloudManagedDatabaseMysqlSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions upcloud_managed_database_mysql_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_mysql_sessions

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions(
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
  limit: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None,
  order: str = None,
  sessions: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseMysqlSessionsSessions]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.service">service</a></code> | <code>str</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#id DataUpcloudManagedDatabaseMysqlSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.order">order</a></code> | <code>str</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.sessions">sessions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>]]</code> | sessions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.service"></a>

- *Type:* str

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#service DataUpcloudManagedDatabaseMysqlSessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#id DataUpcloudManagedDatabaseMysqlSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#limit DataUpcloudManagedDatabaseMysqlSessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.offset"></a>

- *Type:* typing.Union[int, float]

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#offset DataUpcloudManagedDatabaseMysqlSessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.order"></a>

- *Type:* str

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#order DataUpcloudManagedDatabaseMysqlSessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.sessions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>]]

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#sessions DataUpcloudManagedDatabaseMysqlSessions#sessions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.putSessions">put_sessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOffset">reset_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetSessions">reset_sessions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_sessions` <a name="put_sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.putSessions"></a>

```python
def put_sessions(
  value: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseMysqlSessionsSessions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.putSessions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_offset` <a name="reset_offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOffset"></a>

```python
def reset_offset() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_sessions` <a name="reset_sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetSessions"></a>

```python
def reset_sessions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseMysqlSessions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_mysql_sessions

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_mysql_sessions

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_mysql_sessions

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_mysql_sessions

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseMysqlSessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataUpcloudManagedDatabaseMysqlSessions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataUpcloudManagedDatabaseMysqlSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseMysqlSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessions">sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList">DataUpcloudManagedDatabaseMysqlSessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offsetInput">offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessionsInput">sessions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `sessions`<sup>Required</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessions"></a>

```python
sessions: DataUpcloudManagedDatabaseMysqlSessionsSessionsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList">DataUpcloudManagedDatabaseMysqlSessionsSessionsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_input`<sup>Optional</sup> <a name="offset_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offsetInput"></a>

```python
offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `sessions_input`<sup>Optional</sup> <a name="sessions_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessionsInput"></a>

```python
sessions_input: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseMysqlSessionsSessions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseMysqlSessionsConfig <a name="DataUpcloudManagedDatabaseMysqlSessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_mysql_sessions

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  id: str = None,
  limit: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None,
  order: str = None,
  sessions: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseMysqlSessionsSessions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.service">service</a></code> | <code>str</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#id DataUpcloudManagedDatabaseMysqlSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.order">order</a></code> | <code>str</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.sessions">sessions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>]]</code> | sessions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#service DataUpcloudManagedDatabaseMysqlSessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#id DataUpcloudManagedDatabaseMysqlSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#limit DataUpcloudManagedDatabaseMysqlSessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#offset DataUpcloudManagedDatabaseMysqlSessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.order"></a>

```python
order: str
```

- *Type:* str

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#order DataUpcloudManagedDatabaseMysqlSessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.sessions"></a>

```python
sessions: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseMysqlSessionsSessions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>]]

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_mysql_sessions#sessions DataUpcloudManagedDatabaseMysqlSessions#sessions}

---

### DataUpcloudManagedDatabaseMysqlSessionsSessions <a name="DataUpcloudManagedDatabaseMysqlSessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_mysql_sessions

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseMysqlSessionsSessionsList <a name="DataUpcloudManagedDatabaseMysqlSessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_mysql_sessions

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabaseMysqlSessionsSessions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>]]

---


### DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference <a name="DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_mysql_sessions

dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.clientAddr">client_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.datname">datname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.queryDuration">query_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.usename">usename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `client_addr`<sup>Required</sup> <a name="client_addr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.clientAddr"></a>

```python
client_addr: str
```

- *Type:* str

---

##### `datname`<sup>Required</sup> <a name="datname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.datname"></a>

```python
datname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `query_duration`<sup>Required</sup> <a name="query_duration" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.queryDuration"></a>

```python
query_duration: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `usename`<sup>Required</sup> <a name="usename" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.usename"></a>

```python
usename: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataUpcloudManagedDatabaseMysqlSessionsSessions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions">DataUpcloudManagedDatabaseMysqlSessionsSessions</a>]

---



