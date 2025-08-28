# `kubernetesNodeGroup` Submodule <a name="`kubernetesNodeGroup` Submodule" id="@cdktf/provider-upcloud.kubernetesNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesNodeGroup <a name="KubernetesNodeGroup" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group upcloud_kubernetes_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroup(Construct Scope, string Id, KubernetesNodeGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig">KubernetesNodeGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig">KubernetesNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCloudNativePlan">PutCloudNativePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCustomPlan">PutCustomPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putGpuPlan">PutGpuPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs">PutKubeletArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint">PutTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetAntiAffinity">ResetAntiAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetCloudNativePlan">ResetCloudNativePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetCustomPlan">ResetCustomPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetGpuPlan">ResetGpuPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetKubeletArgs">ResetKubeletArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetStorageEncryption">ResetStorageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetTaint">ResetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetUtilityNetworkAccess">ResetUtilityNetworkAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudNativePlan` <a name="PutCloudNativePlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCloudNativePlan"></a>

```csharp
private void PutCloudNativePlan(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCloudNativePlan.parameter.value"></a>

- *Type:* object

---

##### `PutCustomPlan` <a name="PutCustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCustomPlan"></a>

```csharp
private void PutCustomPlan(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCustomPlan.parameter.value"></a>

- *Type:* object

---

##### `PutGpuPlan` <a name="PutGpuPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putGpuPlan"></a>

```csharp
private void PutGpuPlan(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putGpuPlan.parameter.value"></a>

- *Type:* object

---

##### `PutKubeletArgs` <a name="PutKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs"></a>

```csharp
private void PutKubeletArgs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs.parameter.value"></a>

- *Type:* object

---

##### `PutTaint` <a name="PutTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint"></a>

```csharp
private void PutTaint(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint.parameter.value"></a>

- *Type:* object

---

##### `ResetAntiAffinity` <a name="ResetAntiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetAntiAffinity"></a>

```csharp
private void ResetAntiAffinity()
```

##### `ResetCloudNativePlan` <a name="ResetCloudNativePlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetCloudNativePlan"></a>

```csharp
private void ResetCloudNativePlan()
```

##### `ResetCustomPlan` <a name="ResetCustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetCustomPlan"></a>

```csharp
private void ResetCustomPlan()
```

##### `ResetGpuPlan` <a name="ResetGpuPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetGpuPlan"></a>

```csharp
private void ResetGpuPlan()
```

##### `ResetKubeletArgs` <a name="ResetKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetKubeletArgs"></a>

```csharp
private void ResetKubeletArgs()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetStorageEncryption` <a name="ResetStorageEncryption" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetStorageEncryption"></a>

```csharp
private void ResetStorageEncryption()
```

##### `ResetTaint` <a name="ResetTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetTaint"></a>

```csharp
private void ResetTaint()
```

##### `ResetUtilityNetworkAccess` <a name="ResetUtilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetUtilityNetworkAccess"></a>

```csharp
private void ResetUtilityNetworkAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

KubernetesNodeGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

KubernetesNodeGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

KubernetesNodeGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

KubernetesNodeGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KubernetesNodeGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesNodeGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cloudNativePlan">CloudNativePlan</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList">KubernetesNodeGroupCloudNativePlanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlan">CustomPlan</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList">KubernetesNodeGroupCustomPlanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.gpuPlan">GpuPlan</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList">KubernetesNodeGroupGpuPlanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgs">KubeletArgs</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList">KubernetesNodeGroupKubeletArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taint">Taint</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList">KubernetesNodeGroupTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinityInput">AntiAffinityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cloudNativePlanInput">CloudNativePlanInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlanInput">CustomPlanInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.gpuPlanInput">GpuPlanInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgsInput">KubeletArgsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryptionInput">StorageEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taintInput">TaintInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccessInput">UtilityNetworkAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinity">AntiAffinity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryption">StorageEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccess">UtilityNetworkAccess</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CloudNativePlan`<sup>Required</sup> <a name="CloudNativePlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cloudNativePlan"></a>

```csharp
public KubernetesNodeGroupCloudNativePlanList CloudNativePlan { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList">KubernetesNodeGroupCloudNativePlanList</a>

---

##### `CustomPlan`<sup>Required</sup> <a name="CustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlan"></a>

```csharp
public KubernetesNodeGroupCustomPlanList CustomPlan { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList">KubernetesNodeGroupCustomPlanList</a>

---

##### `GpuPlan`<sup>Required</sup> <a name="GpuPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.gpuPlan"></a>

```csharp
public KubernetesNodeGroupGpuPlanList GpuPlan { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList">KubernetesNodeGroupGpuPlanList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubeletArgs`<sup>Required</sup> <a name="KubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgs"></a>

```csharp
public KubernetesNodeGroupKubeletArgsList KubeletArgs { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList">KubernetesNodeGroupKubeletArgsList</a>

---

##### `Taint`<sup>Required</sup> <a name="Taint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taint"></a>

```csharp
public KubernetesNodeGroupTaintList Taint { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList">KubernetesNodeGroupTaintList</a>

---

##### `AntiAffinityInput`<sup>Optional</sup> <a name="AntiAffinityInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinityInput"></a>

```csharp
public object AntiAffinityInput { get; }
```

- *Type:* object

---

##### `CloudNativePlanInput`<sup>Optional</sup> <a name="CloudNativePlanInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cloudNativePlanInput"></a>

```csharp
public object CloudNativePlanInput { get; }
```

- *Type:* object

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `CustomPlanInput`<sup>Optional</sup> <a name="CustomPlanInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlanInput"></a>

```csharp
public object CustomPlanInput { get; }
```

- *Type:* object

---

##### `GpuPlanInput`<sup>Optional</sup> <a name="GpuPlanInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.gpuPlanInput"></a>

```csharp
public object GpuPlanInput { get; }
```

- *Type:* object

---

##### `KubeletArgsInput`<sup>Optional</sup> <a name="KubeletArgsInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgsInput"></a>

```csharp
public object KubeletArgsInput { get; }
```

- *Type:* object

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `StorageEncryptionInput`<sup>Optional</sup> <a name="StorageEncryptionInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryptionInput"></a>

```csharp
public string StorageEncryptionInput { get; }
```

- *Type:* string

---

##### `TaintInput`<sup>Optional</sup> <a name="TaintInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taintInput"></a>

```csharp
public object TaintInput { get; }
```

- *Type:* object

---

##### `UtilityNetworkAccessInput`<sup>Optional</sup> <a name="UtilityNetworkAccessInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccessInput"></a>

```csharp
public object UtilityNetworkAccessInput { get; }
```

- *Type:* object

---

##### `AntiAffinity`<sup>Required</sup> <a name="AntiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinity"></a>

```csharp
public object AntiAffinity { get; }
```

- *Type:* object

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `StorageEncryption`<sup>Required</sup> <a name="StorageEncryption" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryption"></a>

```csharp
public string StorageEncryption { get; }
```

- *Type:* string

---

##### `UtilityNetworkAccess`<sup>Required</sup> <a name="UtilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccess"></a>

```csharp
public object UtilityNetworkAccess { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesNodeGroupCloudNativePlan <a name="KubernetesNodeGroupCloudNativePlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupCloudNativePlan {
    double StorageSize = null,
    string StorageTier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan.property.storageSize">StorageSize</a></code> | <code>double</code> | The size of the storage device in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan.property.storageTier">StorageTier</a></code> | <code>string</code> | The storage tier to use. |

---

##### `StorageSize`<sup>Optional</sup> <a name="StorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan.property.storageSize"></a>

```csharp
public double StorageSize { get; set; }
```

- *Type:* double

The size of the storage device in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#storage_size KubernetesNodeGroup#storage_size}

---

##### `StorageTier`<sup>Optional</sup> <a name="StorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan.property.storageTier"></a>

```csharp
public string StorageTier { get; set; }
```

- *Type:* string

The storage tier to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#storage_tier KubernetesNodeGroup#storage_tier}

---

### KubernetesNodeGroupConfig <a name="KubernetesNodeGroupConfig" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Cluster,
    string Name,
    double NodeCount,
    string Plan,
    object AntiAffinity = null,
    object CloudNativePlan = null,
    object CustomPlan = null,
    object GpuPlan = null,
    object KubeletArgs = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string[] SshKeys = null,
    string StorageEncryption = null,
    object Taint = null,
    object UtilityNetworkAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cluster">Cluster</a></code> | <code>string</code> | UUID of the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.name">Name</a></code> | <code>string</code> | The name of the node group. Needs to be unique within a cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.nodeCount">NodeCount</a></code> | <code>double</code> | Amount of nodes to provision in the node group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.plan">Plan</a></code> | <code>string</code> | The server plan used for the node group. You can list available plans with `upctl server plans`. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.antiAffinity">AntiAffinity</a></code> | <code>object</code> | If set to true, nodes in this group will be placed on separate compute hosts. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cloudNativePlan">CloudNativePlan</a></code> | <code>object</code> | cloud_native_plan block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.customPlan">CustomPlan</a></code> | <code>object</code> | custom_plan block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.gpuPlan">GpuPlan</a></code> | <code>object</code> | gpu_plan block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.kubeletArgs">KubeletArgs</a></code> | <code>object</code> | kubelet_args block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User defined key-value pairs to classify the node_group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | You can optionally select SSH keys to be added as authorized keys to the nodes in this node group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.storageEncryption">StorageEncryption</a></code> | <code>string</code> | The storage encryption strategy to use for the nodes in this group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.taint">Taint</a></code> | <code>object</code> | taint block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.utilityNetworkAccess">UtilityNetworkAccess</a></code> | <code>object</code> | If set to false, nodes in this group will not have access to utility network. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

UUID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#cluster KubernetesNodeGroup#cluster}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the node group. Needs to be unique within a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#name KubernetesNodeGroup#name}

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

Amount of nodes to provision in the node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#node_count KubernetesNodeGroup#node_count}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

The server plan used for the node group. You can list available plans with `upctl server plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#plan KubernetesNodeGroup#plan}

---

##### `AntiAffinity`<sup>Optional</sup> <a name="AntiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.antiAffinity"></a>

```csharp
public object AntiAffinity { get; set; }
```

- *Type:* object

If set to true, nodes in this group will be placed on separate compute hosts.

Please note that anti-affinity policy is considered 'best effort' and enabling it does not fully guarantee that the nodes will end up on different hardware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#anti_affinity KubernetesNodeGroup#anti_affinity}

---

##### `CloudNativePlan`<sup>Optional</sup> <a name="CloudNativePlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cloudNativePlan"></a>

```csharp
public object CloudNativePlan { get; set; }
```

- *Type:* object

cloud_native_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#cloud_native_plan KubernetesNodeGroup#cloud_native_plan}

---

##### `CustomPlan`<sup>Optional</sup> <a name="CustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.customPlan"></a>

```csharp
public object CustomPlan { get; set; }
```

- *Type:* object

custom_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#custom_plan KubernetesNodeGroup#custom_plan}

---

##### `GpuPlan`<sup>Optional</sup> <a name="GpuPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.gpuPlan"></a>

```csharp
public object GpuPlan { get; set; }
```

- *Type:* object

gpu_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#gpu_plan KubernetesNodeGroup#gpu_plan}

---

##### `KubeletArgs`<sup>Optional</sup> <a name="KubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.kubeletArgs"></a>

```csharp
public object KubeletArgs { get; set; }
```

- *Type:* object

kubelet_args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#kubelet_args KubernetesNodeGroup#kubelet_args}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User defined key-value pairs to classify the node_group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#labels KubernetesNodeGroup#labels}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

You can optionally select SSH keys to be added as authorized keys to the nodes in this node group.

This allows you to connect to the nodes via SSH once they are running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#ssh_keys KubernetesNodeGroup#ssh_keys}

---

##### `StorageEncryption`<sup>Optional</sup> <a name="StorageEncryption" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.storageEncryption"></a>

```csharp
public string StorageEncryption { get; set; }
```

- *Type:* string

The storage encryption strategy to use for the nodes in this group.

If not set, the cluster's storage encryption strategy will be used, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#storage_encryption KubernetesNodeGroup#storage_encryption}

---

##### `Taint`<sup>Optional</sup> <a name="Taint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.taint"></a>

```csharp
public object Taint { get; set; }
```

- *Type:* object

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#taint KubernetesNodeGroup#taint}

---

##### `UtilityNetworkAccess`<sup>Optional</sup> <a name="UtilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.utilityNetworkAccess"></a>

```csharp
public object UtilityNetworkAccess { get; set; }
```

- *Type:* object

If set to false, nodes in this group will not have access to utility network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#utility_network_access KubernetesNodeGroup#utility_network_access}

---

### KubernetesNodeGroupCustomPlan <a name="KubernetesNodeGroupCustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupCustomPlan {
    double Cores,
    double Memory,
    double StorageSize,
    string StorageTier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.cores">Cores</a></code> | <code>double</code> | The number of CPU cores dedicated to individual node group nodes. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.memory">Memory</a></code> | <code>double</code> | The amount of memory in megabytes to assign to individual node group node. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageSize">StorageSize</a></code> | <code>double</code> | The size of the storage device in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageTier">StorageTier</a></code> | <code>string</code> | The storage tier to use. |

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.cores"></a>

```csharp
public double Cores { get; set; }
```

- *Type:* double

The number of CPU cores dedicated to individual node group nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#cores KubernetesNodeGroup#cores}

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

The amount of memory in megabytes to assign to individual node group node.

Value needs to be divisible by 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#memory KubernetesNodeGroup#memory}

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageSize"></a>

```csharp
public double StorageSize { get; set; }
```

- *Type:* double

The size of the storage device in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#storage_size KubernetesNodeGroup#storage_size}

---

##### `StorageTier`<sup>Optional</sup> <a name="StorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageTier"></a>

```csharp
public string StorageTier { get; set; }
```

- *Type:* string

The storage tier to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#storage_tier KubernetesNodeGroup#storage_tier}

---

### KubernetesNodeGroupGpuPlan <a name="KubernetesNodeGroupGpuPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupGpuPlan {
    double StorageSize = null,
    string StorageTier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan.property.storageSize">StorageSize</a></code> | <code>double</code> | The size of the storage device in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan.property.storageTier">StorageTier</a></code> | <code>string</code> | The storage tier to use. |

---

##### `StorageSize`<sup>Optional</sup> <a name="StorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan.property.storageSize"></a>

```csharp
public double StorageSize { get; set; }
```

- *Type:* double

The size of the storage device in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#storage_size KubernetesNodeGroup#storage_size}

---

##### `StorageTier`<sup>Optional</sup> <a name="StorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan.property.storageTier"></a>

```csharp
public string StorageTier { get; set; }
```

- *Type:* string

The storage tier to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#storage_tier KubernetesNodeGroup#storage_tier}

---

### KubernetesNodeGroupKubeletArgs <a name="KubernetesNodeGroupKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupKubeletArgs {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.key">Key</a></code> | <code>string</code> | Kubelet argument key. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.value">Value</a></code> | <code>string</code> | Kubelet argument value. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Kubelet argument key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#key KubernetesNodeGroup#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Kubelet argument value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#value KubernetesNodeGroup#value}

---

### KubernetesNodeGroupTaint <a name="KubernetesNodeGroupTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupTaint {
    string Effect,
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.effect">Effect</a></code> | <code>string</code> | Taint effect. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.key">Key</a></code> | <code>string</code> | Taint key. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.value">Value</a></code> | <code>string</code> | Taint value. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Taint effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#effect KubernetesNodeGroup#effect}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Taint key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#key KubernetesNodeGroup#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Taint value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/resources/kubernetes_node_group#value KubernetesNodeGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesNodeGroupCloudNativePlanList <a name="KubernetesNodeGroupCloudNativePlanList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupCloudNativePlanList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.get"></a>

```csharp
private KubernetesNodeGroupCloudNativePlanOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesNodeGroupCloudNativePlanOutputReference <a name="KubernetesNodeGroupCloudNativePlanOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupCloudNativePlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resetStorageSize">ResetStorageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resetStorageTier">ResetStorageTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageSize` <a name="ResetStorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resetStorageSize"></a>

```csharp
private void ResetStorageSize()
```

##### `ResetStorageTier` <a name="ResetStorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resetStorageTier"></a>

```csharp
private void ResetStorageTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageSizeInput">StorageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageTierInput">StorageTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageSize">StorageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageTier">StorageTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageSizeInput`<sup>Optional</sup> <a name="StorageSizeInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageSizeInput"></a>

```csharp
public double StorageSizeInput { get; }
```

- *Type:* double

---

##### `StorageTierInput`<sup>Optional</sup> <a name="StorageTierInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageTierInput"></a>

```csharp
public string StorageTierInput { get; }
```

- *Type:* string

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageSize"></a>

```csharp
public double StorageSize { get; }
```

- *Type:* double

---

##### `StorageTier`<sup>Required</sup> <a name="StorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageTier"></a>

```csharp
public string StorageTier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesNodeGroupCustomPlanList <a name="KubernetesNodeGroupCustomPlanList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupCustomPlanList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.get"></a>

```csharp
private KubernetesNodeGroupCustomPlanOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesNodeGroupCustomPlanOutputReference <a name="KubernetesNodeGroupCustomPlanOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupCustomPlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resetStorageTier">ResetStorageTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageTier` <a name="ResetStorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resetStorageTier"></a>

```csharp
private void ResetStorageTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.coresInput">CoresInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSizeInput">StorageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTierInput">StorageTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.cores">Cores</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSize">StorageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTier">StorageTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoresInput`<sup>Optional</sup> <a name="CoresInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.coresInput"></a>

```csharp
public double CoresInput { get; }
```

- *Type:* double

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `StorageSizeInput`<sup>Optional</sup> <a name="StorageSizeInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSizeInput"></a>

```csharp
public double StorageSizeInput { get; }
```

- *Type:* double

---

##### `StorageTierInput`<sup>Optional</sup> <a name="StorageTierInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTierInput"></a>

```csharp
public string StorageTierInput { get; }
```

- *Type:* string

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.cores"></a>

```csharp
public double Cores { get; }
```

- *Type:* double

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSize"></a>

```csharp
public double StorageSize { get; }
```

- *Type:* double

---

##### `StorageTier`<sup>Required</sup> <a name="StorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTier"></a>

```csharp
public string StorageTier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesNodeGroupGpuPlanList <a name="KubernetesNodeGroupGpuPlanList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupGpuPlanList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.get"></a>

```csharp
private KubernetesNodeGroupGpuPlanOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesNodeGroupGpuPlanOutputReference <a name="KubernetesNodeGroupGpuPlanOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupGpuPlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resetStorageSize">ResetStorageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resetStorageTier">ResetStorageTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageSize` <a name="ResetStorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resetStorageSize"></a>

```csharp
private void ResetStorageSize()
```

##### `ResetStorageTier` <a name="ResetStorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resetStorageTier"></a>

```csharp
private void ResetStorageTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageSizeInput">StorageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageTierInput">StorageTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageSize">StorageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageTier">StorageTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageSizeInput`<sup>Optional</sup> <a name="StorageSizeInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageSizeInput"></a>

```csharp
public double StorageSizeInput { get; }
```

- *Type:* double

---

##### `StorageTierInput`<sup>Optional</sup> <a name="StorageTierInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageTierInput"></a>

```csharp
public string StorageTierInput { get; }
```

- *Type:* string

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageSize"></a>

```csharp
public double StorageSize { get; }
```

- *Type:* double

---

##### `StorageTier`<sup>Required</sup> <a name="StorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageTier"></a>

```csharp
public string StorageTier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesNodeGroupKubeletArgsList <a name="KubernetesNodeGroupKubeletArgsList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupKubeletArgsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get"></a>

```csharp
private KubernetesNodeGroupKubeletArgsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesNodeGroupKubeletArgsOutputReference <a name="KubernetesNodeGroupKubeletArgsOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupKubeletArgsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesNodeGroupTaintList <a name="KubernetesNodeGroupTaintList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupTaintList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get"></a>

```csharp
private KubernetesNodeGroupTaintOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesNodeGroupTaintOutputReference <a name="KubernetesNodeGroupTaintOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new KubernetesNodeGroupTaintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



