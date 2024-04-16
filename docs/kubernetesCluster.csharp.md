# `kubernetesCluster` Submodule <a name="`kubernetesCluster` Submodule" id="@cdktf/provider-upcloud.kubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesCluster <a name="KubernetesCluster" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster upcloud_kubernetes_cluster}.

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
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetPrivateNodeGroups">ResetPrivateNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetVersion">ResetVersion</a></code> | *No description.* |

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

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

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

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetPlan"></a>

```csharp
private void ResetPlan()
```

##### `ResetPrivateNodeGroups` <a name="ResetPrivateNodeGroups" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetPrivateNodeGroups"></a>

```csharp
private void ResetPrivateNodeGroups()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>". |

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

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

KubernetesCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesCluster to import is found.

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
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.networkCidr">NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.nodeGroups">NodeGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.controlPlaneIpFilterInput">ControlPlaneIpFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.privateNodeGroupsInput">PrivateNodeGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.controlPlaneIpFilter">ControlPlaneIpFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.privateNodeGroups">PrivateNodeGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.version">Version</a></code> | <code>string</code> | *No description.* |
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
public object Count { get; }
```

- *Type:* object

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

##### `ControlPlaneIpFilterInput`<sup>Optional</sup> <a name="ControlPlaneIpFilterInput" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.controlPlaneIpFilterInput"></a>

```csharp
public string[] ControlPlaneIpFilterInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

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

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `PrivateNodeGroupsInput`<sup>Optional</sup> <a name="PrivateNodeGroupsInput" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.privateNodeGroupsInput"></a>

```csharp
public object PrivateNodeGroupsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `ControlPlaneIpFilter`<sup>Required</sup> <a name="ControlPlaneIpFilter" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.controlPlaneIpFilter"></a>

```csharp
public string[] ControlPlaneIpFilter { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

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

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `PrivateNodeGroups`<sup>Required</sup> <a name="PrivateNodeGroups" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.privateNodeGroups"></a>

```csharp
public object PrivateNodeGroups { get; }
```

- *Type:* object

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.version"></a>

```csharp
public string Version { get; }
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
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] ControlPlaneIpFilter,
    string Name,
    string Network,
    string Zone,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Plan = null,
    object PrivateNodeGroups = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.controlPlaneIpFilter">ControlPlaneIpFilter</a></code> | <code>string[]</code> | IP addresses or IP ranges in CIDR format which are allowed to access the cluster control plane. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.name">Name</a></code> | <code>string</code> | Cluster name. Needs to be unique within the account. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.network">Network</a></code> | <code>string</code> | Network ID for the cluster to run in. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.zone">Zone</a></code> | <code>string</code> | Zone in which the Kubernetes cluster will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster#id KubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Key-value pairs to classify the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.plan">Plan</a></code> | <code>string</code> | The pricing plan used for the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.privateNodeGroups">PrivateNodeGroups</a></code> | <code>object</code> | Enable private node groups. Private node groups requires a network that is routed through NAT gateway. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.version">Version</a></code> | <code>string</code> | Kubernetes version ID, e.g. `1.27`. You can list available version IDs with `upctl kubernetes versions`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

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

##### `ControlPlaneIpFilter`<sup>Required</sup> <a name="ControlPlaneIpFilter" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.controlPlaneIpFilter"></a>

```csharp
public string[] ControlPlaneIpFilter { get; set; }
```

- *Type:* string[]

IP addresses or IP ranges in CIDR format which are allowed to access the cluster control plane.

To allow access from any source, use `["0.0.0.0/0"]`. To deny access from all sources, use `[]`. Values set here do not restrict access to node groups or exposed Kubernetes services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster#control_plane_ip_filter KubernetesCluster#control_plane_ip_filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Cluster name. Needs to be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster#name KubernetesCluster#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Network ID for the cluster to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster#network KubernetesCluster#network}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Zone in which the Kubernetes cluster will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster#zone KubernetesCluster#zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster#id KubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Key-value pairs to classify the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

The pricing plan used for the cluster.

Default plan is `development`. You can list available plans with `upctl kubernetes plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster#plan KubernetesCluster#plan}

---

##### `PrivateNodeGroups`<sup>Optional</sup> <a name="PrivateNodeGroups" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.privateNodeGroups"></a>

```csharp
public object PrivateNodeGroups { get; set; }
```

- *Type:* object

Enable private node groups. Private node groups requires a network that is routed through NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster#private_node_groups KubernetesCluster#private_node_groups}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Kubernetes version ID, e.g. `1.27`. You can list available version IDs with `upctl kubernetes versions`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/kubernetes_cluster#version KubernetesCluster#version}

---



