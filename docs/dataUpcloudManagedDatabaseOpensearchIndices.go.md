# `dataUpcloudManagedDatabaseOpensearchIndices` Submodule <a name="`dataUpcloudManagedDatabaseOpensearchIndices` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseOpensearchIndices <a name="DataUpcloudManagedDatabaseOpensearchIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/data-sources/managed_database_opensearch_indices upcloud_managed_database_opensearch_indices}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseopensearchindices"

dataupcloudmanageddatabaseopensearchindices.NewDataUpcloudManagedDatabaseOpensearchIndices(scope Construct, id *string, config DataUpcloudManagedDatabaseOpensearchIndicesConfig) DataUpcloudManagedDatabaseOpensearchIndices
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig">DataUpcloudManagedDatabaseOpensearchIndicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig">DataUpcloudManagedDatabaseOpensearchIndicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices">PutIndices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetIndices">ResetIndices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIndices` <a name="PutIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices"></a>

```go
func PutIndices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetId"></a>

```go
func ResetId()
```

##### `ResetIndices` <a name="ResetIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetIndices"></a>

```go
func ResetIndices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseOpensearchIndices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseopensearchindices"

dataupcloudmanageddatabaseopensearchindices.DataUpcloudManagedDatabaseOpensearchIndices_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseopensearchindices"

dataupcloudmanageddatabaseopensearchindices.DataUpcloudManagedDatabaseOpensearchIndices_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseopensearchindices"

dataupcloudmanageddatabaseopensearchindices.DataUpcloudManagedDatabaseOpensearchIndices_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseopensearchindices"

dataupcloudmanageddatabaseopensearchindices.DataUpcloudManagedDatabaseOpensearchIndices_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseOpensearchIndices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataUpcloudManagedDatabaseOpensearchIndices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataUpcloudManagedDatabaseOpensearchIndices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/data-sources/managed_database_opensearch_indices#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseOpensearchIndices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indices">Indices</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList">DataUpcloudManagedDatabaseOpensearchIndicesIndicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indicesInput">IndicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Indices`<sup>Required</sup> <a name="Indices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indices"></a>

```go
func Indices() DataUpcloudManagedDatabaseOpensearchIndicesIndicesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList">DataUpcloudManagedDatabaseOpensearchIndicesIndicesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndicesInput`<sup>Optional</sup> <a name="IndicesInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indicesInput"></a>

```go
func IndicesInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseOpensearchIndicesConfig <a name="DataUpcloudManagedDatabaseOpensearchIndicesConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseopensearchindices"

&dataupcloudmanageddatabaseopensearchindices.DataUpcloudManagedDatabaseOpensearchIndicesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Service: *string,
	Id: *string,
	Indices: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.service">Service</a></code> | <code>*string</code> | Service's UUID for which these indices belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/data-sources/managed_database_opensearch_indices#id DataUpcloudManagedDatabaseOpensearchIndices#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.indices">Indices</a></code> | <code>interface{}</code> | indices block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service's UUID for which these indices belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/data-sources/managed_database_opensearch_indices#service DataUpcloudManagedDatabaseOpensearchIndices#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/data-sources/managed_database_opensearch_indices#id DataUpcloudManagedDatabaseOpensearchIndices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Indices`<sup>Optional</sup> <a name="Indices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.indices"></a>

```go
Indices interface{}
```

- *Type:* interface{}

indices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/data-sources/managed_database_opensearch_indices#indices DataUpcloudManagedDatabaseOpensearchIndices#indices}

---

### DataUpcloudManagedDatabaseOpensearchIndicesIndices <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseopensearchindices"

&dataupcloudmanageddatabaseopensearchindices.DataUpcloudManagedDatabaseOpensearchIndicesIndices {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseOpensearchIndicesIndicesList <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndicesList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseopensearchindices"

dataupcloudmanageddatabaseopensearchindices.NewDataUpcloudManagedDatabaseOpensearchIndicesIndicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataUpcloudManagedDatabaseOpensearchIndicesIndicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get"></a>

```go
func Get(index *f64) DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseopensearchindices"

dataupcloudmanageddatabaseopensearchindices.NewDataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.docs">Docs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.health">Health</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfReplicas">NumberOfReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfShards">NumberOfShards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.readOnlyAllowDelete">ReadOnlyAllowDelete</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Docs`<sup>Required</sup> <a name="Docs" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.docs"></a>

```go
func Docs() *f64
```

- *Type:* *f64

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.health"></a>

```go
func Health() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `NumberOfReplicas`<sup>Required</sup> <a name="NumberOfReplicas" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfReplicas"></a>

```go
func NumberOfReplicas() *f64
```

- *Type:* *f64

---

##### `NumberOfShards`<sup>Required</sup> <a name="NumberOfShards" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfShards"></a>

```go
func NumberOfShards() *f64
```

- *Type:* *f64

---

##### `ReadOnlyAllowDelete`<sup>Required</sup> <a name="ReadOnlyAllowDelete" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.readOnlyAllowDelete"></a>

```go
func ReadOnlyAllowDelete() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



