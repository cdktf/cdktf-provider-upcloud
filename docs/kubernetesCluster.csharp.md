# `kubernetesCluster` Submodule <a name="`kubernetesCluster` Submodule" id="@cdktf/provider-upcloud.kubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesCluster <a name="KubernetesCluster" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster upcloud_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesCluster(Construct Scope, string Id, KubernetesClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig">KubernetesClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig">KubernetesClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

KubernetesCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

KubernetesCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

KubernetesCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.networkCidr">NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.nodeGroups">NodeGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `NetworkCidr`<sup>Required</sup> <a name="NetworkCidr" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.networkCidr"></a>

```csharp
public string NetworkCidr { get; }
```

- *Type:* string

---

##### `NodeGroups`<sup>Required</sup> <a name="NodeGroups" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.nodeGroups"></a>

```csharp
public string[] NodeGroups { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterConfig <a name="KubernetesClusterConfig" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesClusterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Network,
    string Zone,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.name">Name</a></code> | <code>string</code> | Cluster name. Needs to be unique within the account. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.network">Network</a></code> | <code>string</code> | Network ID for the cluster to run in. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.zone">Zone</a></code> | <code>string</code> | Zone in which the Kubernetes cluster will be hosted, e.g. `de-fra1`. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#id KubernetesCluster#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Cluster name. Needs to be unique within the account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#name KubernetesCluster#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Network ID for the cluster to run in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#network KubernetesCluster#network}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Zone in which the Kubernetes cluster will be hosted, e.g. `de-fra1`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#zone KubernetesCluster#zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#id KubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


