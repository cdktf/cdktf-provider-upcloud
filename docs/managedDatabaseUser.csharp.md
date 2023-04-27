# `upcloud_managed_database_user`

Refer to the Terraform Registory for docs: [`upcloud_managed_database_user`](https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user).

# `managedDatabaseUser` Submodule <a name="`managedDatabaseUser` Submodule" id="@cdktf/provider-upcloud.managedDatabaseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseUser <a name="ManagedDatabaseUser" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user upcloud_managed_database_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseUser(Construct Scope, string Id, ManagedDatabaseUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig">ManagedDatabaseUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig">ManagedDatabaseUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putPgAccessControl">PutPgAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl">PutRedisAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPgAccessControl">ResetPgAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetRedisAccessControl">ResetRedisAccessControl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPgAccessControl` <a name="PutPgAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putPgAccessControl"></a>

```csharp
private void PutPgAccessControl(ManagedDatabaseUserPgAccessControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putPgAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

---

##### `PutRedisAccessControl` <a name="PutRedisAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl"></a>

```csharp
private void PutRedisAccessControl(ManagedDatabaseUserRedisAccessControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetAuthentication"></a>

```csharp
private void ResetAuthentication()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPgAccessControl` <a name="ResetPgAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPgAccessControl"></a>

```csharp
private void ResetPgAccessControl()
```

##### `ResetRedisAccessControl` <a name="ResetRedisAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetRedisAccessControl"></a>

```csharp
private void ResetRedisAccessControl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControl">PgAccessControl</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference">ManagedDatabaseUserPgAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControl">RedisAccessControl</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference">ManagedDatabaseUserRedisAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authenticationInput">AuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControlInput">PgAccessControlInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControlInput">RedisAccessControlInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authentication">Authentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PgAccessControl`<sup>Required</sup> <a name="PgAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControl"></a>

```csharp
public ManagedDatabaseUserPgAccessControlOutputReference PgAccessControl { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference">ManagedDatabaseUserPgAccessControlOutputReference</a>

---

##### `RedisAccessControl`<sup>Required</sup> <a name="RedisAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControl"></a>

```csharp
public ManagedDatabaseUserRedisAccessControlOutputReference RedisAccessControl { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference">ManagedDatabaseUserRedisAccessControlOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authenticationInput"></a>

```csharp
public string AuthenticationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PgAccessControlInput`<sup>Optional</sup> <a name="PgAccessControlInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControlInput"></a>

```csharp
public ManagedDatabaseUserPgAccessControl PgAccessControlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

---

##### `RedisAccessControlInput`<sup>Optional</sup> <a name="RedisAccessControlInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControlInput"></a>

```csharp
public ManagedDatabaseUserRedisAccessControl RedisAccessControlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authentication"></a>

```csharp
public string Authentication { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseUserConfig <a name="ManagedDatabaseUserConfig" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Service,
    string Username,
    string Authentication = null,
    string Id = null,
    string Password = null,
    ManagedDatabaseUserPgAccessControl PgAccessControl = null,
    ManagedDatabaseUserRedisAccessControl RedisAccessControl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.service">Service</a></code> | <code>string</code> | Service's UUID for which this user belongs to. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.username">Username</a></code> | <code>string</code> | Name of the database user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.authentication">Authentication</a></code> | <code>string</code> | MySQL only, authentication type. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#id ManagedDatabaseUser#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.password">Password</a></code> | <code>string</code> | Password for the database user. Defaults to a random value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.pgAccessControl">PgAccessControl</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a></code> | pg_access_control block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.redisAccessControl">RedisAccessControl</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a></code> | redis_access_control block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Service's UUID for which this user belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#service ManagedDatabaseUser#service}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Name of the database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#username ManagedDatabaseUser#username}

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.authentication"></a>

```csharp
public string Authentication { get; set; }
```

- *Type:* string

MySQL only, authentication type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#authentication ManagedDatabaseUser#authentication}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#id ManagedDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for the database user. Defaults to a random value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#password ManagedDatabaseUser#password}

---

##### `PgAccessControl`<sup>Optional</sup> <a name="PgAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.pgAccessControl"></a>

```csharp
public ManagedDatabaseUserPgAccessControl PgAccessControl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

pg_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#pg_access_control ManagedDatabaseUser#pg_access_control}

---

##### `RedisAccessControl`<sup>Optional</sup> <a name="RedisAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.redisAccessControl"></a>

```csharp
public ManagedDatabaseUserRedisAccessControl RedisAccessControl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

redis_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#redis_access_control ManagedDatabaseUser#redis_access_control}

---

### ManagedDatabaseUserPgAccessControl <a name="ManagedDatabaseUserPgAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseUserPgAccessControl {
    object AllowReplication = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl.property.allowReplication">AllowReplication</a></code> | <code>object</code> | Grant replication privilege. |

---

##### `AllowReplication`<sup>Optional</sup> <a name="AllowReplication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl.property.allowReplication"></a>

```csharp
public object AllowReplication { get; set; }
```

- *Type:* object

Grant replication privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#allow_replication ManagedDatabaseUser#allow_replication}

---

### ManagedDatabaseUserRedisAccessControl <a name="ManagedDatabaseUserRedisAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseUserRedisAccessControl {
    string[] Categories = null,
    string[] Channels = null,
    string[] Commands = null,
    string[] Keys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.categories">Categories</a></code> | <code>string[]</code> | Set access control to all commands in specified categories. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.channels">Channels</a></code> | <code>string[]</code> | Set access control to Pub/Sub channels. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.commands">Commands</a></code> | <code>string[]</code> | Set access control to commands. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.keys">Keys</a></code> | <code>string[]</code> | Set access control to keys. |

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.categories"></a>

```csharp
public string[] Categories { get; set; }
```

- *Type:* string[]

Set access control to all commands in specified categories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#categories ManagedDatabaseUser#categories}

---

##### `Channels`<sup>Optional</sup> <a name="Channels" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.channels"></a>

```csharp
public string[] Channels { get; set; }
```

- *Type:* string[]

Set access control to Pub/Sub channels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#channels ManagedDatabaseUser#channels}

---

##### `Commands`<sup>Optional</sup> <a name="Commands" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.commands"></a>

```csharp
public string[] Commands { get; set; }
```

- *Type:* string[]

Set access control to commands.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#commands ManagedDatabaseUser#commands}

---

##### `Keys`<sup>Optional</sup> <a name="Keys" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.keys"></a>

```csharp
public string[] Keys { get; set; }
```

- *Type:* string[]

Set access control to keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/managed_database_user#keys ManagedDatabaseUser#keys}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseUserPgAccessControlOutputReference <a name="ManagedDatabaseUserPgAccessControlOutputReference" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseUserPgAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resetAllowReplication">ResetAllowReplication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowReplication` <a name="ResetAllowReplication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resetAllowReplication"></a>

```csharp
private void ResetAllowReplication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplicationInput">AllowReplicationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplication">AllowReplication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowReplicationInput`<sup>Optional</sup> <a name="AllowReplicationInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplicationInput"></a>

```csharp
public object AllowReplicationInput { get; }
```

- *Type:* object

---

##### `AllowReplication`<sup>Required</sup> <a name="AllowReplication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplication"></a>

```csharp
public object AllowReplication { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseUserPgAccessControl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

---


### ManagedDatabaseUserRedisAccessControlOutputReference <a name="ManagedDatabaseUserRedisAccessControlOutputReference" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseUserRedisAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetChannels">ResetChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCommands">ResetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetKeys">ResetKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCategories"></a>

```csharp
private void ResetCategories()
```

##### `ResetChannels` <a name="ResetChannels" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetChannels"></a>

```csharp
private void ResetChannels()
```

##### `ResetCommands` <a name="ResetCommands" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCommands"></a>

```csharp
private void ResetCommands()
```

##### `ResetKeys` <a name="ResetKeys" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetKeys"></a>

```csharp
private void ResetKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categoriesInput">CategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channelsInput">ChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commandsInput">CommandsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keysInput">KeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categories">Categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channels">Channels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commands">Commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keys">Keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categoriesInput"></a>

```csharp
public string[] CategoriesInput { get; }
```

- *Type:* string[]

---

##### `ChannelsInput`<sup>Optional</sup> <a name="ChannelsInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channelsInput"></a>

```csharp
public string[] ChannelsInput { get; }
```

- *Type:* string[]

---

##### `CommandsInput`<sup>Optional</sup> <a name="CommandsInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commandsInput"></a>

```csharp
public string[] CommandsInput { get; }
```

- *Type:* string[]

---

##### `KeysInput`<sup>Optional</sup> <a name="KeysInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keysInput"></a>

```csharp
public string[] KeysInput { get; }
```

- *Type:* string[]

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categories"></a>

```csharp
public string[] Categories { get; }
```

- *Type:* string[]

---

##### `Channels`<sup>Required</sup> <a name="Channels" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channels"></a>

```csharp
public string[] Channels { get; }
```

- *Type:* string[]

---

##### `Commands`<sup>Required</sup> <a name="Commands" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commands"></a>

```csharp
public string[] Commands { get; }
```

- *Type:* string[]

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keys"></a>

```csharp
public string[] Keys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseUserRedisAccessControl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

---



