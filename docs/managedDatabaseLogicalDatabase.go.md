# `managedDatabaseLogicalDatabase` Submodule <a name="`managedDatabaseLogicalDatabase` Submodule" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseLogicalDatabase <a name="ManagedDatabaseLogicalDatabase" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase"></a>

Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database upcloud_managed_database_logical_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v5/manageddatabaselogicaldatabase"

manageddatabaselogicaldatabase.NewManagedDatabaseLogicalDatabase(scope Construct, id *string, config ManagedDatabaseLogicalDatabaseConfig) ManagedDatabaseLogicalDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig">ManagedDatabaseLogicalDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig">ManagedDatabaseLogicalDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCharacterSet">ResetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCollation">ResetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCharacterSet"></a>

```go
func ResetCharacterSet()
```

##### `ResetCollation` <a name="ResetCollation" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCollation"></a>

```go
func ResetCollation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v5/manageddatabaselogicaldatabase"

manageddatabaselogicaldatabase.ManagedDatabaseLogicalDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v5/manageddatabaselogicaldatabase"

manageddatabaselogicaldatabase.ManagedDatabaseLogicalDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v5/manageddatabaselogicaldatabase"

manageddatabaselogicaldatabase.ManagedDatabaseLogicalDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSetInput">CharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collationInput">CollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collation">Collation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSetInput"></a>

```go
func CharacterSetInput() *string
```

- *Type:* *string

---

##### `CollationInput`<sup>Optional</sup> <a name="CollationInput" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collationInput"></a>

```go
func CollationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collation"></a>

```go
func Collation() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseLogicalDatabaseConfig <a name="ManagedDatabaseLogicalDatabaseConfig" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v5/manageddatabaselogicaldatabase"

&manageddatabaselogicaldatabase.ManagedDatabaseLogicalDatabaseConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Service: *string,
	CharacterSet: *string,
	Collation: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.name">Name</a></code> | <code>*string</code> | Name of the logical database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.service">Service</a></code> | <code>*string</code> | Service's UUID for which this user belongs to. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.characterSet">CharacterSet</a></code> | <code>*string</code> | Default character set for the database (LC_CTYPE). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.collation">Collation</a></code> | <code>*string</code> | Default collation for the database (LC_COLLATE). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#id ManagedDatabaseLogicalDatabase#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the logical database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#name ManagedDatabaseLogicalDatabase#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service's UUID for which this user belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#service ManagedDatabaseLogicalDatabase#service}

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.characterSet"></a>

```go
CharacterSet *string
```

- *Type:* *string

Default character set for the database (LC_CTYPE).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#character_set ManagedDatabaseLogicalDatabase#character_set}

---

##### `Collation`<sup>Optional</sup> <a name="Collation" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.collation"></a>

```go
Collation *string
```

- *Type:* *string

Default collation for the database (LC_COLLATE).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#collation ManagedDatabaseLogicalDatabase#collation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#id ManagedDatabaseLogicalDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



