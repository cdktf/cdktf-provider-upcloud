# `dataUpcloudManagedDatabasePostgresqlSessions` Submodule <a name="`dataUpcloudManagedDatabasePostgresqlSessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabasePostgresqlSessions <a name="DataUpcloudManagedDatabasePostgresqlSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions upcloud_managed_database_postgresql_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_postgresql_sessions

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions(
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
  sessions: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabasePostgresqlSessionsSessions]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.service">service</a></code> | <code>str</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.order">order</a></code> | <code>str</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.sessions">sessions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>]]</code> | sessions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.service"></a>

- *Type:* str

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#service DataUpcloudManagedDatabasePostgresqlSessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#limit DataUpcloudManagedDatabasePostgresqlSessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.offset"></a>

- *Type:* typing.Union[int, float]

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#offset DataUpcloudManagedDatabasePostgresqlSessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.order"></a>

- *Type:* str

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#order DataUpcloudManagedDatabasePostgresqlSessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.sessions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>]]

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#sessions DataUpcloudManagedDatabasePostgresqlSessions#sessions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions">put_sessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOffset">reset_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetSessions">reset_sessions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_sessions` <a name="put_sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions"></a>

```python
def put_sessions(
  value: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabasePostgresqlSessionsSessions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_offset` <a name="reset_offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOffset"></a>

```python
def reset_offset() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_sessions` <a name="reset_sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetSessions"></a>

```python
def reset_sessions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabasePostgresqlSessions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_postgresql_sessions

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_postgresql_sessions

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_postgresql_sessions

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_postgresql_sessions

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataUpcloudManagedDatabasePostgresqlSessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataUpcloudManagedDatabasePostgresqlSessions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataUpcloudManagedDatabasePostgresqlSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabasePostgresqlSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessions">sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList">DataUpcloudManagedDatabasePostgresqlSessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offsetInput">offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessionsInput">sessions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `sessions`<sup>Required</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessions"></a>

```python
sessions: DataUpcloudManagedDatabasePostgresqlSessionsSessionsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList">DataUpcloudManagedDatabasePostgresqlSessionsSessionsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_input`<sup>Optional</sup> <a name="offset_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offsetInput"></a>

```python
offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `sessions_input`<sup>Optional</sup> <a name="sessions_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessionsInput"></a>

```python
sessions_input: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabasePostgresqlSessionsSessions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabasePostgresqlSessionsConfig <a name="DataUpcloudManagedDatabasePostgresqlSessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_postgresql_sessions

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig(
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
  sessions: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabasePostgresqlSessionsSessions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.service">service</a></code> | <code>str</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.order">order</a></code> | <code>str</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.sessions">sessions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>]]</code> | sessions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#service DataUpcloudManagedDatabasePostgresqlSessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#limit DataUpcloudManagedDatabasePostgresqlSessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#offset DataUpcloudManagedDatabasePostgresqlSessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.order"></a>

```python
order: str
```

- *Type:* str

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#order DataUpcloudManagedDatabasePostgresqlSessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.sessions"></a>

```python
sessions: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabasePostgresqlSessionsSessions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>]]

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#sessions DataUpcloudManagedDatabasePostgresqlSessions#sessions}

---

### DataUpcloudManagedDatabasePostgresqlSessionsSessions <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_postgresql_sessions

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions(
  backend_xid: typing.Union[int, float] = None,
  backend_xmin: typing.Union[int, float] = None,
  client_hostname: str = None,
  xact_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXid">backend_xid</a></code> | <code>typing.Union[int, float]</code> | Top-level transaction identifier of this service, if any. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXmin">backend_xmin</a></code> | <code>typing.Union[int, float]</code> | The current service's xmin horizon. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.clientHostname">client_hostname</a></code> | <code>str</code> | Host name of the connected client, as reported by a reverse DNS lookup of `client_addr`. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.xactStart">xact_start</a></code> | <code>str</code> | Time when this process' current transaction was started, or null if no transaction is active. |

---

##### `backend_xid`<sup>Optional</sup> <a name="backend_xid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXid"></a>

```python
backend_xid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Top-level transaction identifier of this service, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#backend_xid DataUpcloudManagedDatabasePostgresqlSessions#backend_xid}

---

##### `backend_xmin`<sup>Optional</sup> <a name="backend_xmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXmin"></a>

```python
backend_xmin: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The current service's xmin horizon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#backend_xmin DataUpcloudManagedDatabasePostgresqlSessions#backend_xmin}

---

##### `client_hostname`<sup>Optional</sup> <a name="client_hostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.clientHostname"></a>

```python
client_hostname: str
```

- *Type:* str

Host name of the connected client, as reported by a reverse DNS lookup of `client_addr`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#client_hostname DataUpcloudManagedDatabasePostgresqlSessions#client_hostname}

---

##### `xact_start`<sup>Optional</sup> <a name="xact_start" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.xactStart"></a>

```python
xact_start: str
```

- *Type:* str

Time when this process' current transaction was started, or null if no transaction is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#xact_start DataUpcloudManagedDatabasePostgresqlSessions#xact_start}

---

## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabasePostgresqlSessionsSessionsList <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_postgresql_sessions

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataUpcloudManagedDatabasePostgresqlSessionsSessions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>]]

---


### DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import data_upcloud_managed_database_postgresql_sessions

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXid">reset_backend_xid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXmin">reset_backend_xmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetClientHostname">reset_client_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetXactStart">reset_xact_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backend_xid` <a name="reset_backend_xid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXid"></a>

```python
def reset_backend_xid() -> None
```

##### `reset_backend_xmin` <a name="reset_backend_xmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXmin"></a>

```python
def reset_backend_xmin() -> None
```

##### `reset_client_hostname` <a name="reset_client_hostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetClientHostname"></a>

```python
def reset_client_hostname() -> None
```

##### `reset_xact_start` <a name="reset_xact_start" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetXactStart"></a>

```python
def reset_xact_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendStart">backend_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendType">backend_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientAddr">client_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientPort">client_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datid">datid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datname">datname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryDuration">query_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryStart">query_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.stateChange">state_change</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usename">usename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usesysid">usesysid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEvent">wait_event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEventType">wait_event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXidInput">backend_xid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXminInput">backend_xmin_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostnameInput">client_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStartInput">xact_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXid">backend_xid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXmin">backend_xmin</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostname">client_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStart">xact_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `backend_start`<sup>Required</sup> <a name="backend_start" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendStart"></a>

```python
backend_start: str
```

- *Type:* str

---

##### `backend_type`<sup>Required</sup> <a name="backend_type" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendType"></a>

```python
backend_type: str
```

- *Type:* str

---

##### `client_addr`<sup>Required</sup> <a name="client_addr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientAddr"></a>

```python
client_addr: str
```

- *Type:* str

---

##### `client_port`<sup>Required</sup> <a name="client_port" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientPort"></a>

```python
client_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datid`<sup>Required</sup> <a name="datid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datid"></a>

```python
datid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datname`<sup>Required</sup> <a name="datname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datname"></a>

```python
datname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `query_duration`<sup>Required</sup> <a name="query_duration" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryDuration"></a>

```python
query_duration: str
```

- *Type:* str

---

##### `query_start`<sup>Required</sup> <a name="query_start" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryStart"></a>

```python
query_start: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_change`<sup>Required</sup> <a name="state_change" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.stateChange"></a>

```python
state_change: str
```

- *Type:* str

---

##### `usename`<sup>Required</sup> <a name="usename" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usename"></a>

```python
usename: str
```

- *Type:* str

---

##### `usesysid`<sup>Required</sup> <a name="usesysid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usesysid"></a>

```python
usesysid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_event`<sup>Required</sup> <a name="wait_event" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEvent"></a>

```python
wait_event: str
```

- *Type:* str

---

##### `wait_event_type`<sup>Required</sup> <a name="wait_event_type" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEventType"></a>

```python
wait_event_type: str
```

- *Type:* str

---

##### `backend_xid_input`<sup>Optional</sup> <a name="backend_xid_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXidInput"></a>

```python
backend_xid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend_xmin_input`<sup>Optional</sup> <a name="backend_xmin_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXminInput"></a>

```python
backend_xmin_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_hostname_input`<sup>Optional</sup> <a name="client_hostname_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostnameInput"></a>

```python
client_hostname_input: str
```

- *Type:* str

---

##### `xact_start_input`<sup>Optional</sup> <a name="xact_start_input" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStartInput"></a>

```python
xact_start_input: str
```

- *Type:* str

---

##### `backend_xid`<sup>Required</sup> <a name="backend_xid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXid"></a>

```python
backend_xid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend_xmin`<sup>Required</sup> <a name="backend_xmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXmin"></a>

```python
backend_xmin: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_hostname`<sup>Required</sup> <a name="client_hostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostname"></a>

```python
client_hostname: str
```

- *Type:* str

---

##### `xact_start`<sup>Required</sup> <a name="xact_start" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStart"></a>

```python
xact_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataUpcloudManagedDatabasePostgresqlSessionsSessions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>]

---



