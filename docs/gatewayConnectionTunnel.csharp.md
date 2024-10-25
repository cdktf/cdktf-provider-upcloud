# `gatewayConnectionTunnel` Submodule <a name="`gatewayConnectionTunnel` Submodule" id="@cdktf/provider-upcloud.gatewayConnectionTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GatewayConnectionTunnel <a name="GatewayConnectionTunnel" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel upcloud_gateway_connection_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new GatewayConnectionTunnel(Construct Scope, string Id, GatewayConnectionTunnelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig">GatewayConnectionTunnelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig">GatewayConnectionTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk">PutIpsecAuthPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties">PutIpsecProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetIpsecProperties">ResetIpsecProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpsecAuthPsk` <a name="PutIpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk"></a>

```csharp
private void PutIpsecAuthPsk(GatewayConnectionTunnelIpsecAuthPsk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---

##### `PutIpsecProperties` <a name="PutIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties"></a>

```csharp
private void PutIpsecProperties(GatewayConnectionTunnelIpsecProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpsecProperties` <a name="ResetIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetIpsecProperties"></a>

```csharp
private void ResetIpsecProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GatewayConnectionTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

GatewayConnectionTunnel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

GatewayConnectionTunnel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

GatewayConnectionTunnel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

GatewayConnectionTunnel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GatewayConnectionTunnel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GatewayConnectionTunnel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GatewayConnectionTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GatewayConnectionTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPsk">IpsecAuthPsk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference">GatewayConnectionTunnelIpsecAuthPskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecProperties">IpsecProperties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference">GatewayConnectionTunnelIpsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.operationalState">OperationalState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPskInput">IpsecAuthPskInput</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecPropertiesInput">IpsecPropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressNameInput">LocalAddressNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddressInput">RemoteAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressName">LocalAddressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddress">RemoteAddress</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IpsecAuthPsk`<sup>Required</sup> <a name="IpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPsk"></a>

```csharp
public GatewayConnectionTunnelIpsecAuthPskOutputReference IpsecAuthPsk { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference">GatewayConnectionTunnelIpsecAuthPskOutputReference</a>

---

##### `IpsecProperties`<sup>Required</sup> <a name="IpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecProperties"></a>

```csharp
public GatewayConnectionTunnelIpsecPropertiesOutputReference IpsecProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference">GatewayConnectionTunnelIpsecPropertiesOutputReference</a>

---

##### `OperationalState`<sup>Required</sup> <a name="OperationalState" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.operationalState"></a>

```csharp
public string OperationalState { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpsecAuthPskInput`<sup>Optional</sup> <a name="IpsecAuthPskInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPskInput"></a>

```csharp
public GatewayConnectionTunnelIpsecAuthPsk IpsecAuthPskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---

##### `IpsecPropertiesInput`<sup>Optional</sup> <a name="IpsecPropertiesInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecPropertiesInput"></a>

```csharp
public GatewayConnectionTunnelIpsecProperties IpsecPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---

##### `LocalAddressNameInput`<sup>Optional</sup> <a name="LocalAddressNameInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressNameInput"></a>

```csharp
public string LocalAddressNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RemoteAddressInput`<sup>Optional</sup> <a name="RemoteAddressInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddressInput"></a>

```csharp
public string RemoteAddressInput { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalAddressName`<sup>Required</sup> <a name="LocalAddressName" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressName"></a>

```csharp
public string LocalAddressName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemoteAddress`<sup>Required</sup> <a name="RemoteAddress" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddress"></a>

```csharp
public string RemoteAddress { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GatewayConnectionTunnelConfig <a name="GatewayConnectionTunnelConfig" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new GatewayConnectionTunnelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectionId,
    GatewayConnectionTunnelIpsecAuthPsk IpsecAuthPsk,
    string LocalAddressName,
    string Name,
    string RemoteAddress,
    string Id = null,
    GatewayConnectionTunnelIpsecProperties IpsecProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connectionId">ConnectionId</a></code> | <code>string</code> | ID of the upcloud_gateway_connection resource to which the tunnel belongs. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecAuthPsk">IpsecAuthPsk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | ipsec_auth_psk block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.localAddressName">LocalAddressName</a></code> | <code>string</code> | Public (UpCloud) endpoint address of this tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.name">Name</a></code> | <code>string</code> | The name of the tunnel, should be unique within the connection. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.remoteAddress">RemoteAddress</a></code> | <code>string</code> | Remote public IP address of the tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecProperties">IpsecProperties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | ipsec_properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

ID of the upcloud_gateway_connection resource to which the tunnel belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#connection_id GatewayConnectionTunnel#connection_id}

---

##### `IpsecAuthPsk`<sup>Required</sup> <a name="IpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecAuthPsk"></a>

```csharp
public GatewayConnectionTunnelIpsecAuthPsk IpsecAuthPsk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

ipsec_auth_psk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#ipsec_auth_psk GatewayConnectionTunnel#ipsec_auth_psk}

---

##### `LocalAddressName`<sup>Required</sup> <a name="LocalAddressName" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.localAddressName"></a>

```csharp
public string LocalAddressName { get; set; }
```

- *Type:* string

Public (UpCloud) endpoint address of this tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#local_address_name GatewayConnectionTunnel#local_address_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the tunnel, should be unique within the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#name GatewayConnectionTunnel#name}

---

##### `RemoteAddress`<sup>Required</sup> <a name="RemoteAddress" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.remoteAddress"></a>

```csharp
public string RemoteAddress { get; set; }
```

- *Type:* string

Remote public IP address of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#remote_address GatewayConnectionTunnel#remote_address}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpsecProperties`<sup>Optional</sup> <a name="IpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecProperties"></a>

```csharp
public GatewayConnectionTunnelIpsecProperties IpsecProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

ipsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#ipsec_properties GatewayConnectionTunnel#ipsec_properties}

---

### GatewayConnectionTunnelIpsecAuthPsk <a name="GatewayConnectionTunnelIpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new GatewayConnectionTunnelIpsecAuthPsk {
    string Psk
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.property.psk">Psk</a></code> | <code>string</code> | The pre-shared key. |

---

##### `Psk`<sup>Required</sup> <a name="Psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.property.psk"></a>

```csharp
public string Psk { get; set; }
```

- *Type:* string

The pre-shared key.

This value is only used during resource creation and is not returned in the state. It is not possible to update this value. If you need to update it, delete the connection and create a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#psk GatewayConnectionTunnel#psk}

---

### GatewayConnectionTunnelIpsecProperties <a name="GatewayConnectionTunnelIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new GatewayConnectionTunnelIpsecProperties {
    double ChildRekeyTime = null,
    double DpdDelay = null,
    double DpdTimeout = null,
    double IkeLifetime = null,
    string[] Phase1Algorithms = null,
    double[] Phase1DhGroupNumbers = null,
    string[] Phase1IntegrityAlgorithms = null,
    string[] Phase2Algorithms = null,
    double[] Phase2DhGroupNumbers = null,
    string[] Phase2IntegrityAlgorithms = null,
    double RekeyTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.childRekeyTime">ChildRekeyTime</a></code> | <code>double</code> | IKE child SA rekey time in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdDelay">DpdDelay</a></code> | <code>double</code> | Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdTimeout">DpdTimeout</a></code> | <code>double</code> | Timeout period for DPD reply before considering the peer to be dead, in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.ikeLifetime">IkeLifetime</a></code> | <code>double</code> | Maximum IKE SA lifetime in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1Algorithms">Phase1Algorithms</a></code> | <code>string[]</code> | List of Phase 1: Proposal algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1DhGroupNumbers">Phase1DhGroupNumbers</a></code> | <code>double[]</code> | List of Phase 1 Diffie-Hellman group numbers. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1IntegrityAlgorithms">Phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | List of Phase 1 integrity algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2Algorithms">Phase2Algorithms</a></code> | <code>string[]</code> | List of Phase 2: Security Association algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2DhGroupNumbers">Phase2DhGroupNumbers</a></code> | <code>double[]</code> | List of Phase 2 Diffie-Hellman group numbers. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2IntegrityAlgorithms">Phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | List of Phase 2 integrity algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.rekeyTime">RekeyTime</a></code> | <code>double</code> | IKE SA rekey time in seconds. |

---

##### `ChildRekeyTime`<sup>Optional</sup> <a name="ChildRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.childRekeyTime"></a>

```csharp
public double ChildRekeyTime { get; set; }
```

- *Type:* double

IKE child SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#child_rekey_time GatewayConnectionTunnel#child_rekey_time}

---

##### `DpdDelay`<sup>Optional</sup> <a name="DpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdDelay"></a>

```csharp
public double DpdDelay { get; set; }
```

- *Type:* double

Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#dpd_delay GatewayConnectionTunnel#dpd_delay}

---

##### `DpdTimeout`<sup>Optional</sup> <a name="DpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdTimeout"></a>

```csharp
public double DpdTimeout { get; set; }
```

- *Type:* double

Timeout period for DPD reply before considering the peer to be dead, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#dpd_timeout GatewayConnectionTunnel#dpd_timeout}

---

##### `IkeLifetime`<sup>Optional</sup> <a name="IkeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.ikeLifetime"></a>

```csharp
public double IkeLifetime { get; set; }
```

- *Type:* double

Maximum IKE SA lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#ike_lifetime GatewayConnectionTunnel#ike_lifetime}

---

##### `Phase1Algorithms`<sup>Optional</sup> <a name="Phase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1Algorithms"></a>

```csharp
public string[] Phase1Algorithms { get; set; }
```

- *Type:* string[]

List of Phase 1: Proposal algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#phase1_algorithms GatewayConnectionTunnel#phase1_algorithms}

---

##### `Phase1DhGroupNumbers`<sup>Optional</sup> <a name="Phase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1DhGroupNumbers"></a>

```csharp
public double[] Phase1DhGroupNumbers { get; set; }
```

- *Type:* double[]

List of Phase 1 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#phase1_dh_group_numbers GatewayConnectionTunnel#phase1_dh_group_numbers}

---

##### `Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="Phase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1IntegrityAlgorithms"></a>

```csharp
public string[] Phase1IntegrityAlgorithms { get; set; }
```

- *Type:* string[]

List of Phase 1 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#phase1_integrity_algorithms GatewayConnectionTunnel#phase1_integrity_algorithms}

---

##### `Phase2Algorithms`<sup>Optional</sup> <a name="Phase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2Algorithms"></a>

```csharp
public string[] Phase2Algorithms { get; set; }
```

- *Type:* string[]

List of Phase 2: Security Association algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#phase2_algorithms GatewayConnectionTunnel#phase2_algorithms}

---

##### `Phase2DhGroupNumbers`<sup>Optional</sup> <a name="Phase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2DhGroupNumbers"></a>

```csharp
public double[] Phase2DhGroupNumbers { get; set; }
```

- *Type:* double[]

List of Phase 2 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#phase2_dh_group_numbers GatewayConnectionTunnel#phase2_dh_group_numbers}

---

##### `Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="Phase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2IntegrityAlgorithms"></a>

```csharp
public string[] Phase2IntegrityAlgorithms { get; set; }
```

- *Type:* string[]

List of Phase 2 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#phase2_integrity_algorithms GatewayConnectionTunnel#phase2_integrity_algorithms}

---

##### `RekeyTime`<sup>Optional</sup> <a name="RekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.rekeyTime"></a>

```csharp
public double RekeyTime { get; set; }
```

- *Type:* double

IKE SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.1/docs/resources/gateway_connection_tunnel#rekey_time GatewayConnectionTunnel#rekey_time}

---

## Classes <a name="Classes" id="Classes"></a>

### GatewayConnectionTunnelIpsecAuthPskOutputReference <a name="GatewayConnectionTunnelIpsecAuthPskOutputReference" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new GatewayConnectionTunnelIpsecAuthPskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.pskInput">PskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.psk">Psk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PskInput`<sup>Optional</sup> <a name="PskInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.pskInput"></a>

```csharp
public string PskInput { get; }
```

- *Type:* string

---

##### `Psk`<sup>Required</sup> <a name="Psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.psk"></a>

```csharp
public string Psk { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.internalValue"></a>

```csharp
public GatewayConnectionTunnelIpsecAuthPsk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---


### GatewayConnectionTunnelIpsecPropertiesOutputReference <a name="GatewayConnectionTunnelIpsecPropertiesOutputReference" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new GatewayConnectionTunnelIpsecPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetChildRekeyTime">ResetChildRekeyTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdDelay">ResetDpdDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdTimeout">ResetDpdTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetIkeLifetime">ResetIkeLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1Algorithms">ResetPhase1Algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1DhGroupNumbers">ResetPhase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1IntegrityAlgorithms">ResetPhase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2Algorithms">ResetPhase2Algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2DhGroupNumbers">ResetPhase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2IntegrityAlgorithms">ResetPhase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetRekeyTime">ResetRekeyTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChildRekeyTime` <a name="ResetChildRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetChildRekeyTime"></a>

```csharp
private void ResetChildRekeyTime()
```

##### `ResetDpdDelay` <a name="ResetDpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdDelay"></a>

```csharp
private void ResetDpdDelay()
```

##### `ResetDpdTimeout` <a name="ResetDpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdTimeout"></a>

```csharp
private void ResetDpdTimeout()
```

##### `ResetIkeLifetime` <a name="ResetIkeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetIkeLifetime"></a>

```csharp
private void ResetIkeLifetime()
```

##### `ResetPhase1Algorithms` <a name="ResetPhase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1Algorithms"></a>

```csharp
private void ResetPhase1Algorithms()
```

##### `ResetPhase1DhGroupNumbers` <a name="ResetPhase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1DhGroupNumbers"></a>

```csharp
private void ResetPhase1DhGroupNumbers()
```

##### `ResetPhase1IntegrityAlgorithms` <a name="ResetPhase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1IntegrityAlgorithms"></a>

```csharp
private void ResetPhase1IntegrityAlgorithms()
```

##### `ResetPhase2Algorithms` <a name="ResetPhase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2Algorithms"></a>

```csharp
private void ResetPhase2Algorithms()
```

##### `ResetPhase2DhGroupNumbers` <a name="ResetPhase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2DhGroupNumbers"></a>

```csharp
private void ResetPhase2DhGroupNumbers()
```

##### `ResetPhase2IntegrityAlgorithms` <a name="ResetPhase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2IntegrityAlgorithms"></a>

```csharp
private void ResetPhase2IntegrityAlgorithms()
```

##### `ResetRekeyTime` <a name="ResetRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetRekeyTime"></a>

```csharp
private void ResetRekeyTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTimeInput">ChildRekeyTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelayInput">DpdDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeoutInput">DpdTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetimeInput">IkeLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1AlgorithmsInput">Phase1AlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbersInput">Phase1DhGroupNumbersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithmsInput">Phase1IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2AlgorithmsInput">Phase2AlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbersInput">Phase2DhGroupNumbersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithmsInput">Phase2IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTimeInput">RekeyTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTime">ChildRekeyTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelay">DpdDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeout">DpdTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetime">IkeLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1Algorithms">Phase1Algorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbers">Phase1DhGroupNumbers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithms">Phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2Algorithms">Phase2Algorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbers">Phase2DhGroupNumbers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithms">Phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTime">RekeyTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChildRekeyTimeInput`<sup>Optional</sup> <a name="ChildRekeyTimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTimeInput"></a>

```csharp
public double ChildRekeyTimeInput { get; }
```

- *Type:* double

---

##### `DpdDelayInput`<sup>Optional</sup> <a name="DpdDelayInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelayInput"></a>

```csharp
public double DpdDelayInput { get; }
```

- *Type:* double

---

##### `DpdTimeoutInput`<sup>Optional</sup> <a name="DpdTimeoutInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeoutInput"></a>

```csharp
public double DpdTimeoutInput { get; }
```

- *Type:* double

---

##### `IkeLifetimeInput`<sup>Optional</sup> <a name="IkeLifetimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetimeInput"></a>

```csharp
public double IkeLifetimeInput { get; }
```

- *Type:* double

---

##### `Phase1AlgorithmsInput`<sup>Optional</sup> <a name="Phase1AlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1AlgorithmsInput"></a>

```csharp
public string[] Phase1AlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="Phase1DhGroupNumbersInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbersInput"></a>

```csharp
public double[] Phase1DhGroupNumbersInput { get; }
```

- *Type:* double[]

---

##### `Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Phase1IntegrityAlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithmsInput"></a>

```csharp
public string[] Phase1IntegrityAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `Phase2AlgorithmsInput`<sup>Optional</sup> <a name="Phase2AlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2AlgorithmsInput"></a>

```csharp
public string[] Phase2AlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="Phase2DhGroupNumbersInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbersInput"></a>

```csharp
public double[] Phase2DhGroupNumbersInput { get; }
```

- *Type:* double[]

---

##### `Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Phase2IntegrityAlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithmsInput"></a>

```csharp
public string[] Phase2IntegrityAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `RekeyTimeInput`<sup>Optional</sup> <a name="RekeyTimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTimeInput"></a>

```csharp
public double RekeyTimeInput { get; }
```

- *Type:* double

---

##### `ChildRekeyTime`<sup>Required</sup> <a name="ChildRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTime"></a>

```csharp
public double ChildRekeyTime { get; }
```

- *Type:* double

---

##### `DpdDelay`<sup>Required</sup> <a name="DpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelay"></a>

```csharp
public double DpdDelay { get; }
```

- *Type:* double

---

##### `DpdTimeout`<sup>Required</sup> <a name="DpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeout"></a>

```csharp
public double DpdTimeout { get; }
```

- *Type:* double

---

##### `IkeLifetime`<sup>Required</sup> <a name="IkeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetime"></a>

```csharp
public double IkeLifetime { get; }
```

- *Type:* double

---

##### `Phase1Algorithms`<sup>Required</sup> <a name="Phase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1Algorithms"></a>

```csharp
public string[] Phase1Algorithms { get; }
```

- *Type:* string[]

---

##### `Phase1DhGroupNumbers`<sup>Required</sup> <a name="Phase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbers"></a>

```csharp
public double[] Phase1DhGroupNumbers { get; }
```

- *Type:* double[]

---

##### `Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="Phase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithms"></a>

```csharp
public string[] Phase1IntegrityAlgorithms { get; }
```

- *Type:* string[]

---

##### `Phase2Algorithms`<sup>Required</sup> <a name="Phase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2Algorithms"></a>

```csharp
public string[] Phase2Algorithms { get; }
```

- *Type:* string[]

---

##### `Phase2DhGroupNumbers`<sup>Required</sup> <a name="Phase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbers"></a>

```csharp
public double[] Phase2DhGroupNumbers { get; }
```

- *Type:* double[]

---

##### `Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="Phase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithms"></a>

```csharp
public string[] Phase2IntegrityAlgorithms { get; }
```

- *Type:* string[]

---

##### `RekeyTime`<sup>Required</sup> <a name="RekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTime"></a>

```csharp
public double RekeyTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.internalValue"></a>

```csharp
public GatewayConnectionTunnelIpsecProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---



