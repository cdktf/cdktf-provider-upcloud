# `floatingIpAddress` Submodule <a name="`floatingIpAddress` Submodule" id="@cdktf/provider-upcloud.floatingIpAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FloatingIpAddress <a name="FloatingIpAddress" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress"></a>

Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/floating_ip_address upcloud_floating_ip_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new FloatingIpAddress(Construct Scope, string Id, FloatingIpAddressConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig">FloatingIpAddressConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig">FloatingIpAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetFamily">ResetFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetMacAddress">ResetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetAccess"></a>

```csharp
private void ResetAccess()
```

##### `ResetFamily` <a name="ResetFamily" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetFamily"></a>

```csharp
private void ResetFamily()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMacAddress` <a name="ResetMacAddress" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetMacAddress"></a>

```csharp
private void ResetMacAddress()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

FloatingIpAddress.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

FloatingIpAddress.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

FloatingIpAddress.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.macAddressInput">MacAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.macAddress">MacAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MacAddressInput`<sup>Optional</sup> <a name="MacAddressInput" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.macAddressInput"></a>

```csharp
public string MacAddressInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.macAddress"></a>

```csharp
public string MacAddress { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddress.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FloatingIpAddressConfig <a name="FloatingIpAddressConfig" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new FloatingIpAddressConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Access = null,
    string Family = null,
    string Id = null,
    string MacAddress = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.access">Access</a></code> | <code>string</code> | Is address for utility or public network. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.family">Family</a></code> | <code>string</code> | The address family of new IP address. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/floating_ip_address#id FloatingIpAddress#id}. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.macAddress">MacAddress</a></code> | <code>string</code> | MAC address of server interface to assign address to. |
| <code><a href="#@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.zone">Zone</a></code> | <code>string</code> | Zone of address, required when assigning a detached floating IP address. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

Is address for utility or public network.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/floating_ip_address#access FloatingIpAddress#access}

---

##### `Family`<sup>Optional</sup> <a name="Family" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

The address family of new IP address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/floating_ip_address#family FloatingIpAddress#family}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/floating_ip_address#id FloatingIpAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MacAddress`<sup>Optional</sup> <a name="MacAddress" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.macAddress"></a>

```csharp
public string MacAddress { get; set; }
```

- *Type:* string

MAC address of server interface to assign address to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/floating_ip_address#mac_address FloatingIpAddress#mac_address}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-upcloud.floatingIpAddress.FloatingIpAddressConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Zone of address, required when assigning a detached floating IP address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/floating_ip_address#zone FloatingIpAddress#zone}

---


