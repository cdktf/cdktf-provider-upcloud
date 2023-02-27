# `managedDatabaseUser` Submodule <a name="`managedDatabaseUser` Submodule" id="@cdktf/provider-upcloud.managedDatabaseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseUser <a name="ManagedDatabaseUser" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user upcloud_managed_database_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_user

managedDatabaseUser.ManagedDatabaseUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  username: str,
  authentication: str = None,
  id: str = None,
  password: str = None,
  pg_access_control: ManagedDatabaseUserPgAccessControl = None,
  redis_access_control: ManagedDatabaseUserRedisAccessControl = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.service">service</a></code> | <code>str</code> | Service's UUID for which this user belongs to. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.username">username</a></code> | <code>str</code> | Name of the database user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.authentication">authentication</a></code> | <code>str</code> | MySQL only, authentication type. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#id ManagedDatabaseUser#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for the database user. Defaults to a random value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.pgAccessControl">pg_access_control</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a></code> | pg_access_control block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.redisAccessControl">redis_access_control</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a></code> | redis_access_control block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.service"></a>

- *Type:* str

Service's UUID for which this user belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#service ManagedDatabaseUser#service}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.username"></a>

- *Type:* str

Name of the database user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#username ManagedDatabaseUser#username}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.authentication"></a>

- *Type:* str

MySQL only, authentication type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#authentication ManagedDatabaseUser#authentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#id ManagedDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.password"></a>

- *Type:* str

Password for the database user. Defaults to a random value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#password ManagedDatabaseUser#password}

---

##### `pg_access_control`<sup>Optional</sup> <a name="pg_access_control" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.pgAccessControl"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

pg_access_control block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#pg_access_control ManagedDatabaseUser#pg_access_control}

---

##### `redis_access_control`<sup>Optional</sup> <a name="redis_access_control" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.redisAccessControl"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

redis_access_control block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#redis_access_control ManagedDatabaseUser#redis_access_control}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putPgAccessControl">put_pg_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl">put_redis_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPgAccessControl">reset_pg_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetRedisAccessControl">reset_redis_access_control</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_pg_access_control` <a name="put_pg_access_control" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putPgAccessControl"></a>

```python
def put_pg_access_control(
  allow_replication: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allow_replication`<sup>Optional</sup> <a name="allow_replication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putPgAccessControl.parameter.allowReplication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Grant replication privilege.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#allow_replication ManagedDatabaseUser#allow_replication}

---

##### `put_redis_access_control` <a name="put_redis_access_control" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl"></a>

```python
def put_redis_access_control(
  categories: typing.List[str] = None,
  channels: typing.List[str] = None,
  commands: typing.List[str] = None,
  keys: typing.List[str] = None
) -> None
```

###### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl.parameter.categories"></a>

- *Type:* typing.List[str]

Set access control to all commands in specified categories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#categories ManagedDatabaseUser#categories}

---

###### `channels`<sup>Optional</sup> <a name="channels" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl.parameter.channels"></a>

- *Type:* typing.List[str]

Set access control to Pub/Sub channels.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#channels ManagedDatabaseUser#channels}

---

###### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl.parameter.commands"></a>

- *Type:* typing.List[str]

Set access control to commands.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#commands ManagedDatabaseUser#commands}

---

###### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl.parameter.keys"></a>

- *Type:* typing.List[str]

Set access control to keys.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#keys ManagedDatabaseUser#keys}

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_pg_access_control` <a name="reset_pg_access_control" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPgAccessControl"></a>

```python
def reset_pg_access_control() -> None
```

##### `reset_redis_access_control` <a name="reset_redis_access_control" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetRedisAccessControl"></a>

```python
def reset_redis_access_control() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_user

managedDatabaseUser.ManagedDatabaseUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_user

managedDatabaseUser.ManagedDatabaseUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_user

managedDatabaseUser.ManagedDatabaseUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControl">pg_access_control</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference">ManagedDatabaseUserPgAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControl">redis_access_control</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference">ManagedDatabaseUserRedisAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authenticationInput">authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControlInput">pg_access_control_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControlInput">redis_access_control_input</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authentication">authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pg_access_control`<sup>Required</sup> <a name="pg_access_control" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControl"></a>

```python
pg_access_control: ManagedDatabaseUserPgAccessControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference">ManagedDatabaseUserPgAccessControlOutputReference</a>

---

##### `redis_access_control`<sup>Required</sup> <a name="redis_access_control" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControl"></a>

```python
redis_access_control: ManagedDatabaseUserRedisAccessControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference">ManagedDatabaseUserRedisAccessControlOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authenticationInput"></a>

```python
authentication_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `pg_access_control_input`<sup>Optional</sup> <a name="pg_access_control_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControlInput"></a>

```python
pg_access_control_input: ManagedDatabaseUserPgAccessControl
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

---

##### `redis_access_control_input`<sup>Optional</sup> <a name="redis_access_control_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControlInput"></a>

```python
redis_access_control_input: ManagedDatabaseUserRedisAccessControl
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authentication"></a>

```python
authentication: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseUserConfig <a name="ManagedDatabaseUserConfig" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_user

managedDatabaseUser.ManagedDatabaseUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  username: str,
  authentication: str = None,
  id: str = None,
  password: str = None,
  pg_access_control: ManagedDatabaseUserPgAccessControl = None,
  redis_access_control: ManagedDatabaseUserRedisAccessControl = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.service">service</a></code> | <code>str</code> | Service's UUID for which this user belongs to. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.username">username</a></code> | <code>str</code> | Name of the database user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.authentication">authentication</a></code> | <code>str</code> | MySQL only, authentication type. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#id ManagedDatabaseUser#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.password">password</a></code> | <code>str</code> | Password for the database user. Defaults to a random value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.pgAccessControl">pg_access_control</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a></code> | pg_access_control block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.redisAccessControl">redis_access_control</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a></code> | redis_access_control block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Service's UUID for which this user belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#service ManagedDatabaseUser#service}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Name of the database user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#username ManagedDatabaseUser#username}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.authentication"></a>

```python
authentication: str
```

- *Type:* str

MySQL only, authentication type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#authentication ManagedDatabaseUser#authentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#id ManagedDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the database user. Defaults to a random value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#password ManagedDatabaseUser#password}

---

##### `pg_access_control`<sup>Optional</sup> <a name="pg_access_control" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.pgAccessControl"></a>

```python
pg_access_control: ManagedDatabaseUserPgAccessControl
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

pg_access_control block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#pg_access_control ManagedDatabaseUser#pg_access_control}

---

##### `redis_access_control`<sup>Optional</sup> <a name="redis_access_control" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.redisAccessControl"></a>

```python
redis_access_control: ManagedDatabaseUserRedisAccessControl
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

redis_access_control block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#redis_access_control ManagedDatabaseUser#redis_access_control}

---

### ManagedDatabaseUserPgAccessControl <a name="ManagedDatabaseUserPgAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_user

managedDatabaseUser.ManagedDatabaseUserPgAccessControl(
  allow_replication: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl.property.allowReplication">allow_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Grant replication privilege. |

---

##### `allow_replication`<sup>Optional</sup> <a name="allow_replication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl.property.allowReplication"></a>

```python
allow_replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Grant replication privilege.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#allow_replication ManagedDatabaseUser#allow_replication}

---

### ManagedDatabaseUserRedisAccessControl <a name="ManagedDatabaseUserRedisAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_user

managedDatabaseUser.ManagedDatabaseUserRedisAccessControl(
  categories: typing.List[str] = None,
  channels: typing.List[str] = None,
  commands: typing.List[str] = None,
  keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.categories">categories</a></code> | <code>typing.List[str]</code> | Set access control to all commands in specified categories. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.channels">channels</a></code> | <code>typing.List[str]</code> | Set access control to Pub/Sub channels. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.commands">commands</a></code> | <code>typing.List[str]</code> | Set access control to commands. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.keys">keys</a></code> | <code>typing.List[str]</code> | Set access control to keys. |

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

Set access control to all commands in specified categories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#categories ManagedDatabaseUser#categories}

---

##### `channels`<sup>Optional</sup> <a name="channels" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.channels"></a>

```python
channels: typing.List[str]
```

- *Type:* typing.List[str]

Set access control to Pub/Sub channels.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#channels ManagedDatabaseUser#channels}

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

Set access control to commands.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#commands ManagedDatabaseUser#commands}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

Set access control to keys.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#keys ManagedDatabaseUser#keys}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseUserPgAccessControlOutputReference <a name="ManagedDatabaseUserPgAccessControlOutputReference" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_user

managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resetAllowReplication">reset_allow_replication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_replication` <a name="reset_allow_replication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resetAllowReplication"></a>

```python
def reset_allow_replication() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplicationInput">allow_replication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplication">allow_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_replication_input`<sup>Optional</sup> <a name="allow_replication_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplicationInput"></a>

```python
allow_replication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_replication`<sup>Required</sup> <a name="allow_replication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplication"></a>

```python
allow_replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseUserPgAccessControl
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

---


### ManagedDatabaseUserRedisAccessControlOutputReference <a name="ManagedDatabaseUserRedisAccessControlOutputReference" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import managed_database_user

managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCategories">reset_categories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetChannels">reset_channels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCommands">reset_commands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetKeys">reset_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_categories` <a name="reset_categories" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCategories"></a>

```python
def reset_categories() -> None
```

##### `reset_channels` <a name="reset_channels" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetChannels"></a>

```python
def reset_channels() -> None
```

##### `reset_commands` <a name="reset_commands" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCommands"></a>

```python
def reset_commands() -> None
```

##### `reset_keys` <a name="reset_keys" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetKeys"></a>

```python
def reset_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categoriesInput">categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channelsInput">channels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commandsInput">commands_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keysInput">keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categories">categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channels">channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commands">commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keys">keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `categories_input`<sup>Optional</sup> <a name="categories_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categoriesInput"></a>

```python
categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `channels_input`<sup>Optional</sup> <a name="channels_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channelsInput"></a>

```python
channels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `commands_input`<sup>Optional</sup> <a name="commands_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commandsInput"></a>

```python
commands_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `keys_input`<sup>Optional</sup> <a name="keys_input" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keysInput"></a>

```python
keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channels"></a>

```python
channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDatabaseUserRedisAccessControl
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

---


