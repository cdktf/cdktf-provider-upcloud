# `loadbalancerManualCertificateBundle` Submodule <a name="`loadbalancerManualCertificateBundle` Submodule" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerManualCertificateBundle <a name="LoadbalancerManualCertificateBundle" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle"></a>

Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle upcloud_loadbalancer_manual_certificate_bundle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancermanualcertificatebundle"

loadbalancermanualcertificatebundle.NewLoadbalancerManualCertificateBundle(scope Construct, id *string, config LoadbalancerManualCertificateBundleConfig) LoadbalancerManualCertificateBundle
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig">LoadbalancerManualCertificateBundleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig">LoadbalancerManualCertificateBundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetIntermediates">ResetIntermediates</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetId"></a>

```go
func ResetId()
```

##### `ResetIntermediates` <a name="ResetIntermediates" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetIntermediates"></a>

```go
func ResetIntermediates()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancermanualcertificatebundle"

loadbalancermanualcertificatebundle.LoadbalancerManualCertificateBundle_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancermanualcertificatebundle"

loadbalancermanualcertificatebundle.LoadbalancerManualCertificateBundle_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancermanualcertificatebundle"

loadbalancermanualcertificatebundle.LoadbalancerManualCertificateBundle_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notAfter">NotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notBefore">NotBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.operationalState">OperationalState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediatesInput">IntermediatesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediates">Intermediates</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notAfter"></a>

```go
func NotAfter() *string
```

- *Type:* *string

---

##### `NotBefore`<sup>Required</sup> <a name="NotBefore" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notBefore"></a>

```go
func NotBefore() *string
```

- *Type:* *string

---

##### `OperationalState`<sup>Required</sup> <a name="OperationalState" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.operationalState"></a>

```go
func OperationalState() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntermediatesInput`<sup>Optional</sup> <a name="IntermediatesInput" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediatesInput"></a>

```go
func IntermediatesInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Intermediates`<sup>Required</sup> <a name="Intermediates" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediates"></a>

```go
func Intermediates() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerManualCertificateBundleConfig <a name="LoadbalancerManualCertificateBundleConfig" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancermanualcertificatebundle"

&loadbalancermanualcertificatebundle.LoadbalancerManualCertificateBundleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Certificate: *string,
	Name: *string,
	PrivateKey: *string,
	Id: *string,
	Intermediates: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.certificate">Certificate</a></code> | <code>*string</code> | Certificate within base64 string must be in PEM format. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the bundle must be unique within customer account. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Private key within base64 string must be in PEM format. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle#id LoadbalancerManualCertificateBundle#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.intermediates">Intermediates</a></code> | <code>*string</code> | Intermediate certificates within base64 string must be in PEM format. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Certificate within base64 string must be in PEM format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle#certificate LoadbalancerManualCertificateBundle#certificate}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the bundle must be unique within customer account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle#name LoadbalancerManualCertificateBundle#name}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Private key within base64 string must be in PEM format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle#private_key LoadbalancerManualCertificateBundle#private_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle#id LoadbalancerManualCertificateBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Intermediates`<sup>Optional</sup> <a name="Intermediates" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.intermediates"></a>

```go
Intermediates *string
```

- *Type:* *string

Intermediate certificates within base64 string must be in PEM format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_manual_certificate_bundle#intermediates LoadbalancerManualCertificateBundle#intermediates}

---



