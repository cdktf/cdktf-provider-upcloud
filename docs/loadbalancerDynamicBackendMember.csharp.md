# `upcloud_loadbalancer_dynamic_backend_member`

Refer to the Terraform Registory for docs: [`upcloud_loadbalancer_dynamic_backend_member`](https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_dynamic_backend_member).

# `loadbalancerDynamicBackendMember` Submodule <a name="`loadbalancerDynamicBackendMember` Submodule" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerDynamicBackendMember <a name="LoadbalancerDynamicBackendMember" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_dynamic_backend_member upcloud_loadbalancer_dynamic_backend_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerDynamicBackendMember(Construct Scope, string Id, LoadbalancerDynamicBackendMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig">LoadbalancerDynamicBackendMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig">LoadbalancerDynamicBackendMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetPort"></a>

```csharp
private void ResetPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerDynamicBackendMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerDynamicBackendMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerDynamicBackendMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessionsInput">MaxSessionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessions">MaxSessions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weight">Weight</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `MaxSessionsInput`<sup>Optional</sup> <a name="MaxSessionsInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessionsInput"></a>

```csharp
public double MaxSessionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `MaxSessions`<sup>Required</sup> <a name="MaxSessions" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessions"></a>

```csharp
public double MaxSessions { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerDynamicBackendMemberConfig <a name="LoadbalancerDynamicBackendMemberConfig" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerDynamicBackendMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    double MaxSessions,
    string Name,
    double Weight,
    object Enabled = null,
    string Id = null,
    string Ip = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.backend">Backend</a></code> | <code>string</code> | ID of the load balancer backend to which the member is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.maxSessions">MaxSessions</a></code> | <code>double</code> | Maximum number of sessions before queueing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.name">Name</a></code> | <code>string</code> | The name of the member must be unique within the load balancer backend service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.weight">Weight</a></code> | <code>double</code> | Used to adjust the server's weight relative to other servers. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.enabled">Enabled</a></code> | <code>object</code> | Indicates if the member is enabled. Disabled members are excluded from load balancing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_dynamic_backend_member#id LoadbalancerDynamicBackendMember#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.ip">Ip</a></code> | <code>string</code> | Optional fallback IP address in case of failure on DNS resolving. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.port">Port</a></code> | <code>double</code> | Server port. Port is optional and can be specified in DNS SRV record. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

ID of the load balancer backend to which the member is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_dynamic_backend_member#backend LoadbalancerDynamicBackendMember#backend}

---

##### `MaxSessions`<sup>Required</sup> <a name="MaxSessions" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.maxSessions"></a>

```csharp
public double MaxSessions { get; set; }
```

- *Type:* double

Maximum number of sessions before queueing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_dynamic_backend_member#max_sessions LoadbalancerDynamicBackendMember#max_sessions}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the member must be unique within the load balancer backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_dynamic_backend_member#name LoadbalancerDynamicBackendMember#name}

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Used to adjust the server's weight relative to other servers.

All servers will receive a load proportional to their weight relative to the sum of all weights, so the higher the weight, the higher the load.
A value of 0 means the server will not participate in load balancing but will still accept persistent connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_dynamic_backend_member#weight LoadbalancerDynamicBackendMember#weight}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Indicates if the member is enabled. Disabled members are excluded from load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_dynamic_backend_member#enabled LoadbalancerDynamicBackendMember#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_dynamic_backend_member#id LoadbalancerDynamicBackendMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

Optional fallback IP address in case of failure on DNS resolving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_dynamic_backend_member#ip LoadbalancerDynamicBackendMember#ip}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Server port. Port is optional and can be specified in DNS SRV record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_dynamic_backend_member#port LoadbalancerDynamicBackendMember#port}

---



